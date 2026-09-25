/**
 * Web Audio API procedural heavy-metal & punk synthesizer.
 * 100% client-side, zero MP3 bandwidth, zero external assets.
 * Emulates a high-gain drop-D tube amp with distortion wave-shaping,
 * cabinet filtering, tight palm-muted riffs, and rock drums.
 */

class MetalAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private cabinetFilter: BiquadFilterNode | null = null;
  private waveShaper: WaveShaperNode | null = null;
  private driveGain: GainNode | null = null;
  public analyser: AnalyserNode | null = null;

  private step: number = 0;
  private tempoBpm: number = 142; // Fast energetic punk / thrash tempo
  private timerId: number | null = null;
  private subscribers: Set<(playing: boolean) => void> = new Set();

  // Drop D riff frequencies (Hz): D2, F2, G2, Ab2, A2, C3, D3
  // Classic chug pattern: Palm muted D2 chugs with F->G accents
  private riffNotes: { root: number; fifth: number; palmMute: boolean; drum: 'kick' | 'snare' | 'blast' | 'hat' }[] = [
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'kick' },   // D2 chug
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'hat' },    // D2 chug
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'snare' },  // D2 chug + snare
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'hat' },    // D2 chug
    { root: 87.31, fifth: 130.81, palmMute: false, drum: 'kick' }, // F2 power chord open
    { root: 98.00, fifth: 146.83, palmMute: false, drum: 'hat' },  // G2 power chord open
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'snare' },  // D2 chug + snare
    { root: 103.83, fifth: 155.56, palmMute: false, drum: 'hat' },// Ab2 accent

    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'kick' },   // D2 chug
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'hat' },    // D2 chug
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'snare' },  // D2 chug
    { root: 73.42, fifth: 110.0, palmMute: true, drum: 'hat' },    // D2 chug
    { root: 110.00, fifth: 164.81, palmMute: false, drum: 'kick' },// A2
    { root: 98.00, fifth: 146.83, palmMute: false, drum: 'snare' },// G2
    { root: 87.31, fifth: 130.81, palmMute: false, drum: 'kick' }, // F2
    { root: 73.42, fifth: 110.0, palmMute: false, drum: 'blast' }, // D2 sustained
  ];

  private makeDistortionCurve(amount: number = 70): Float32Array {
    const k = amount;
    const nSamples = 44100;
    const curve = new Float32Array(nSamples);
    const deg = Math.PI / 180;
    for (let i = 0; i < nSamples; ++i) {
      const x = (i * 2) / nSamples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  private initContext() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioContextClass();

    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

    // Analyser Node for the Oscilloscope Visualizer
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 256;
    this.analyser.smoothingTimeConstant = 0.8;

    // Guitar Amp Distortion Stage
    this.driveGain = this.ctx.createGain();
    this.driveGain.gain.setValueAtTime(4.5, this.ctx.currentTime);

    this.waveShaper = this.ctx.createWaveShaper();
    this.waveShaper.curve = this.makeDistortionCurve(80) as any;
    this.waveShaper.oversample = '4x';

    // Guitar Cabinet 4x12 Emulation (Lowpass cutoff + mid-hump)
    this.cabinetFilter = this.ctx.createBiquadFilter();
    this.cabinetFilter.type = 'lowpass';
    this.cabinetFilter.frequency.setValueAtTime(3600, this.ctx.currentTime);
    this.cabinetFilter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    const midHump = this.ctx.createBiquadFilter();
    midHump.type = 'peaking';
    midHump.frequency.setValueAtTime(1400, this.ctx.currentTime);
    midHump.gain.setValueAtTime(5.0, this.ctx.currentTime);
    midHump.Q.setValueAtTime(1.2, this.ctx.currentTime);

    // Routing: Drive -> WaveShaper -> MidHump -> CabinetFilter -> MasterGain -> Analyser -> Output
    this.driveGain.connect(this.waveShaper);
    this.waveShaper.connect(midHump);
    midHump.connect(this.cabinetFilter);
    this.cabinetFilter.connect(this.masterGain);

    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  private triggerRiffStep() {
    if (!this.ctx || !this.isPlaying || !this.driveGain) return;

    const note = this.riffNotes[this.step % this.riffNotes.length];
    const now = this.ctx.currentTime;
    const stepDuration = 60 / this.tempoBpm / 2; // 16th note feel

    // Trigger Guitar Power Chord (Dual Sawtooth Oscillators)
    const oscRoot = this.ctx.createOscillator();
    const oscFifth = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    oscRoot.type = 'sawtooth';
    oscFifth.type = 'sawtooth';

    // Detune root slightly for wide dirty stereo thickness
    oscRoot.frequency.setValueAtTime(note.root, now);
    oscFifth.frequency.setValueAtTime(note.fifth, now);
    oscFifth.detune.setValueAtTime(8, now);

    // Envelopes: Palm-muted vs Open sustain
    if (note.palmMute) {
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.85, now + 0.008);
      noteGain.gain.exponentialRampToValueAtTime(0.04, now + stepDuration * 0.7);
      noteGain.gain.linearRampToValueAtTime(0.0001, now + stepDuration * 0.9);
    } else {
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(1.0, now + 0.01);
      noteGain.gain.exponentialRampToValueAtTime(0.3, now + stepDuration * 1.5);
      noteGain.gain.linearRampToValueAtTime(0.0001, now + stepDuration * 1.8);
    }

    oscRoot.connect(noteGain);
    oscFifth.connect(noteGain);
    noteGain.connect(this.driveGain);

    oscRoot.start(now);
    oscFifth.start(now);
    oscRoot.stop(now + stepDuration * 2);
    oscFifth.stop(now + stepDuration * 2);

    // Trigger Rhythm (Kick / Snare / Cymbals) directly into Master for clarity
    if (this.masterGain) {
      this.triggerDrum(note.drum, now);
    }

    this.step++;
  }

  private triggerDrum(type: 'kick' | 'snare' | 'blast' | 'hat', time: number) {
    if (!this.ctx || !this.masterGain) return;

    if (type === 'kick' || type === 'blast') {
      const kickOsc = this.ctx.createOscillator();
      const kickGain = this.ctx.createGain();
      kickOsc.type = 'sine';
      kickOsc.frequency.setValueAtTime(130, time);
      kickOsc.frequency.exponentialRampToValueAtTime(38, time + 0.12);

      kickGain.gain.setValueAtTime(0.7, time);
      kickGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

      kickOsc.connect(kickGain);
      kickGain.connect(this.masterGain);
      kickOsc.start(time);
      kickOsc.stop(time + 0.16);
    }

    if (type === 'snare' || type === 'blast') {
      // Noise component
      const bufferSize = this.ctx.sampleRate * 0.12;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const snareFilter = this.ctx.createBiquadFilter();
      snareFilter.type = 'highpass';
      snareFilter.frequency.setValueAtTime(800, time);

      const snareGain = this.ctx.createGain();
      snareGain.gain.setValueAtTime(0.65, time);
      snareGain.gain.exponentialRampToValueAtTime(0.001, time + 0.13);

      noise.connect(snareFilter);
      snareFilter.connect(snareGain);
      snareGain.connect(this.masterGain);
      noise.start(time);
      noise.stop(time + 0.14);
    }

    if (type === 'hat') {
      const hatBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.04, this.ctx.sampleRate);
      const data = hatBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const hatSource = this.ctx.createBufferSource();
      hatSource.buffer = hatBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(6000, time);

      const hatGain = this.ctx.createGain();
      hatGain.gain.setValueAtTime(0.25, time);
      hatGain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

      hatSource.connect(filter);
      filter.connect(hatGain);
      hatGain.connect(this.masterGain);
      hatSource.start(time);
      hatSource.stop(time + 0.05);
    }
  }

  public async togglePlay(): Promise<boolean> {
    this.initContext();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initContext();
    if (!this.ctx) return;
    this.isPlaying = true;
    this.step = 0;
    const intervalMs = (60 / this.tempoBpm / 2) * 1000;

    // Trigger initial beat
    this.triggerRiffStep();
    this.timerId = window.setInterval(() => {
      this.triggerRiffStep();
    }, intervalMs);

    this.notifySubscribers();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.notifySubscribers();
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      const clamped = Math.max(0, Math.min(1, vol));
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : clamped * 0.45, this.ctx.currentTime);
    }
  }

  public setOverdrive(gainMultiplier: number) {
    if (this.driveGain && this.ctx) {
      const clamped = Math.max(1, Math.min(10, gainMultiplier));
      this.driveGain.gain.setValueAtTime(clamped, this.ctx.currentTime);
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.35, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.subscribers.add(cb);
    return () => {
      this.subscribers.delete(cb);
    };
  }

  private notifySubscribers() {
    this.subscribers.forEach((cb) => cb(this.isPlaying));
  }
}

export const metalSynth = new MetalAudioEngine();
