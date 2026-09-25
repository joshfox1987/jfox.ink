import React, { useEffect, useRef, useState } from 'react';
import { Play, Square, Volume2, VolumeX, Flame, Zap, Sliders } from 'lucide-react';
import { metalSynth } from '../audio/metalSynth';

interface AmpWidgetProps {
  compact?: boolean;
}

export const AmpWidget: React.FC<AmpWidgetProps> = ({ compact = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [overdrive, setOverdrive] = useState(5.5);
  const [showControls, setShowControls] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const unsubscribe = metalSynth.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => {
      unsubscribe();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Oscilloscope canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderWave = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#08080C';
      ctx.fillRect(0, 0, width, height);

      // Subtle CRT grid lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += 15) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += 10) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      if (isPlaying && metalSynth.analyser) {
        const bufferLength = metalSynth.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        metalSynth.analyser.getByteTimeDomainData(dataArray);

        // Waveform trace
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00F0FF';
        ctx.strokeStyle = '#00F0FF';
        ctx.beginPath();

        const sliceWidth = width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }

        ctx.lineTo(width, height / 2);
        ctx.stroke();

        // Secondary distorted glow spike
        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(217, 70, 239, 0.7)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        x = 0;
        for (let i = 0; i < bufferLength; i += 2) {
          const v = dataArray[i] / 128.0;
          const y = ((v - 1.0) * 1.3 + 1.0) * (height / 2);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          x += sliceWidth * 2;
        }
        ctx.stroke();
      } else {
        // Flat standby hum line
        ctx.strokeStyle = 'rgba(57, 255, 20, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(renderWave);
    };

    renderWave();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  const handlePlayToggle = async () => {
    const active = await metalSynth.togglePlay();
    setIsPlaying(active);
  };

  const handleMuteToggle = () => {
    const muted = metalSynth.toggleMute();
    setIsMuted(muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    metalSynth.setVolume(val);
  };

  const handleOverdriveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setOverdrive(val);
    metalSynth.setOverdrive(val);
  };

  return (
    <div className={`relative border border-[#272738] bg-[#0E0F17] shadow-xl ${compact ? 'px-2.5 py-1.5 rounded-sm' : 'p-3 rounded-md'}`}>
      <div className="flex items-center gap-2.5">
        {/* Amp Brand Tag / Status */}
        <div className="flex items-center gap-1.5 pr-2 border-r border-[#272738]">
          <div className="relative flex items-center justify-center">
            <span
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                isPlaying ? 'bg-[#39FF14] shadow-[0_0_10px_#39FF14]' : 'bg-[#EF4444] opacity-75'
              }`}
            />
            {isPlaying && (
              <span className="absolute h-4 w-4 rounded-full bg-[#39FF14] opacity-40 animate-ping" />
            )}
          </div>
          <span className="font-mono-code text-[10px] tracking-wider uppercase font-bold text-gray-400 hidden sm:inline">
            {isPlaying ? 'TUBE 100W' : 'AMP IDLE'}
          </span>
        </div>

        {/* Live CRT Waveform Oscilloscope Screen */}
        <div className="relative border border-[#1F2233] bg-[#05060A] overflow-hidden rounded-xs">
          <canvas
            ref={canvasRef}
            width={compact ? 80 : 120}
            height={26}
            className="block"
            title="Native Web Audio Drop-D Oscilloscope"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-60" />
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePlayToggle}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono-code font-bold uppercase transition-all duration-200 cursor-pointer rounded-xs border ${
              isPlaying
                ? 'bg-[#FF3E00] text-black border-[#FF3E00] shadow-[0_0_12px_rgba(255,62,0,0.5)]'
                : 'bg-[#181A26] text-[#00F0FF] border-[#00F0FF]/40 hover:bg-[#00F0FF]/15 hover:border-[#00F0FF]'
            }`}
            title={isPlaying ? 'Stop Heavy Metal Riff' : 'Play In-Browser Drop-D Riff (Web Audio API)'}
          >
            {isPlaying ? (
              <>
                <Square className="w-3.5 h-3.5 fill-black" />
                <span className="hidden md:inline">STOP</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-[#00F0FF]" />
                <span className="hidden md:inline">RIFF</span>
              </>
            )}
          </button>

          <button
            onClick={handleMuteToggle}
            disabled={!isPlaying}
            className={`p-1 rounded-xs border transition-colors cursor-pointer ${
              !isPlaying
                ? 'opacity-40 border-transparent text-gray-600 cursor-not-allowed'
                : isMuted
                ? 'text-red-400 border-red-500/40 bg-red-950/30'
                : 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 bg-[#161824]'
            }`}
            title={isMuted ? 'Unmute' : 'Mute Riff'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setShowControls(!showControls)}
            className={`p-1 rounded-xs border transition-colors cursor-pointer ${
              showControls
                ? 'text-[#D946EF] border-[#D946EF] bg-[#D946EF]/10'
                : 'text-gray-400 border-gray-700 hover:text-gray-200 hover:border-gray-500 bg-[#161824]'
            }`}
            title="Tune Distortion & Master Gain"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Expanded Tone Stack Drawer */}
      {showControls && (
        <div className="absolute right-0 top-full mt-2 w-72 z-50 p-3 bg-[#0D0E16] border border-[#D946EF]/50 shadow-2xl rounded-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222538]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="font-mono-code text-[11px] font-bold text-white uppercase tracking-wider">
                TUBE STACK PRE-AMP
              </span>
            </div>
            <span className="text-[10px] font-mono-code text-[#D946EF] uppercase">
              100% Client Audio
            </span>
          </div>

          <div className="space-y-3">
            {/* Drive / Overdrive */}
            <div>
              <div className="flex justify-between text-[11px] font-mono-code mb-1">
                <span className="text-gray-400 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#FF3E00]" /> DRIVE GAIN
                </span>
                <span className="text-[#00F0FF]">{overdrive.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="9.0"
                step="0.2"
                value={overdrive}
                onChange={handleOverdriveChange}
                className="w-full accent-[#00F0FF] bg-[#1E2235] h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Master Volume */}
            <div>
              <div className="flex justify-between text-[11px] font-mono-code mb-1">
                <span className="text-gray-400 flex items-center gap-1">
                  <Volume2 className="w-3 h-3 text-[#39FF14]" /> MASTER LEVEL
                </span>
                <span className="text-[#39FF14]">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-[#39FF14] bg-[#1E2235] h-1.5 rounded cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-[#222538] flex items-center justify-between text-[10px] font-mono-code text-gray-500">
              <span>KEY: DROP-D • 142 BPM</span>
              <span>SYNTH: OSC + WAVESHAPER</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
