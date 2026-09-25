import React, { useState } from 'react';
import { Cpu, Flame, Settings, Gauge, Wrench, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

interface Lab3DPrototypingProps {
  onPreload3DSpec: (specNotes: string) => void;
}

export const Lab3DPrototyping: React.FC<Lab3DPrototypingProps> = ({ onPreload3DSpec }) => {
  const [selectedPolymer, setSelectedPolymer] = useState<'pctg' | 'pccf' | 'tpu' | 'pla'>('pctg');
  const [infillDensity, setInfillDensity] = useState<number>(45);
  const [partSize, setPartSize] = useState<'small' | 'medium' | 'large'>('medium');

  const polymers = {
    pctg: {
      name: 'PCTG Engineering Copolymer',
      hdt: '76°C (Continuous)',
      impact: 'Extreme (High Izod Impact, Superior to PETG)',
      chemResistance: 'Resistant to oils, fuels, brake fluid & dilute acids',
      layerResolution: '0.12mm – 0.28mm',
      idealFor: 'Automotive brackets, fluid reservoirs, drone arms, outdoor housings'
    },
    pccf: {
      name: 'Carbon Fiber Polycarbonate (PC-CF)',
      hdt: '114°C (High Temp)',
      impact: 'Ultra Rigid (Zero deflection under high load)',
      chemResistance: 'Industrial solvent & heat tolerance',
      layerResolution: '0.16mm – 0.24mm',
      idealFor: 'Engine bay ducting, turbo intake flanges, structural tool fixtures'
    },
    tpu: {
      name: '95A Shore Industrial TPU Rubber',
      hdt: '60°C (Flexible)',
      impact: 'Unbreakable (Abrasion resistant elastomeric)',
      chemResistance: 'Grease, UV, and ozone resistant',
      layerResolution: '0.20mm',
      idealFor: 'Gaskets, bump stops, vibration isolators, tactical grip overmolds'
    },
    pla: {
      name: 'Rapid Tough PLA+ & Multi-Color Silk',
      hdt: '55°C',
      impact: 'High Tensile, Crisp Aesthetics',
      chemResistance: 'Dry interior use',
      layerResolution: '0.08mm – 0.20mm (Ultra-Fine)',
      idealFor: 'Display totems, architectural models, custom cosplay armor'
    }
  };

  const currentPolymer = polymers[selectedPolymer];

  // Calculated estimates
  const estimatedHours =
    partSize === 'small'
      ? Math.round(2 + (infillDensity / 100) * 3)
      : partSize === 'medium'
      ? Math.round(5 + (infillDensity / 100) * 7)
      : Math.round(12 + (infillDensity / 100) * 16);

  const estimatedGrams =
    partSize === 'small'
      ? Math.round(35 + infillDensity * 0.4)
      : partSize === 'medium'
      ? Math.round(110 + infillDensity * 1.2)
      : Math.round(320 + infillDensity * 2.8);

  const handlePushToQuote = () => {
    const specDetails = `3D Fabrication Spec: Polymer: ${currentPolymer.name}, Infill: ${infillDensity}%, Scale: ${partSize.toUpperCase()} (~${estimatedGrams}g, ~${estimatedHours}hr cycle), HDT: ${currentPolymer.hdt}`;
    onPreload3DSpec(specDetails);
  };

  return (
    <section id="lab3d" className="relative py-20 bg-[#08080C] border-b border-[#222538] overflow-hidden">
      {/* Background Matrix Accent */}
      <div className="absolute inset-0 bg-halftone-cyan opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Column: Workshop Narrative & Machine Arsenal */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121420] border border-[#2B304A] text-xs font-mono-code text-[#39FF14] rounded-xs mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>RAPID ADDITIVE MANUFACTURING ATELIER</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display uppercase tracking-wider text-white leading-tight">
              PRECISION 3D PRINTING &amp; PHYSICAL LAB
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4 font-normal">
              Most 3D printing services churn out brittle decorative plastic on slow stock machines.
              At <strong className="text-white">J Fox Ink</strong>, our print farm is powered by 
              custom-enclosed, Klipper-tuned CoreXY architectures running 
              <strong className="text-[#00F0FF]"> high-flow hardened nozzles</strong> and active chamber heaters.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-4 bg-[#0E101A] border border-[#222538] rounded-xs">
                <div className="flex items-center gap-2.5 text-sm font-heading font-bold text-white mb-1">
                  <Wrench className="w-4 h-4 text-[#D946EF]" />
                  <span>Heat-Staked Brass Threaded Inserts (M2 – M8)</span>
                </div>
                <p className="text-xs text-gray-400 font-mono-code">
                  Zero stripped plastic threads. We thermo-fuse knurled brass inserts directly into 
                  recessed bosses for machine bolts capable of hundreds of assembly cycles.
                </p>
              </div>

              <div className="p-4 bg-[#0E101A] border border-[#222538] rounded-xs">
                <div className="flex items-center gap-2.5 text-sm font-heading font-bold text-white mb-1">
                  <Gauge className="w-4 h-4 text-[#00F0FF]" />
                  <span>Klipper Input Shaping &amp; Pressure Advance</span>
                </div>
                <p className="text-xs text-gray-400 font-mono-code">
                  Accelerometer-calibrated resonance cancellation eradicates ghosting and ringing at 
                  speeds up to 350mm/s with 0.08mm micro-stepping accuracy.
                </p>
              </div>

              <div className="p-4 bg-[#0E101A] border border-[#222538] rounded-xs">
                <div className="flex items-center gap-2.5 text-sm font-heading font-bold text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
                  <span>Post-Processing &amp; Vapor-Honed Texturing</span>
                </div>
                <p className="text-xs text-gray-400 font-mono-code">
                  Parts can be annealed for elevated heat deflection, vapor smoothed, or primed and 
                  sprayed with matte automotive polyurethane textures.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Estimator & Polymer Console */}
          <div className="lg:w-1/2 w-full bg-[#0D0F18] border-2 border-[#252A40] p-6 sm:p-8 rounded-xs shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#222538] mb-6">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#00F0FF]" />
                <span className="font-mono-code text-xs font-bold uppercase text-white tracking-wider">
                  RAPID 3D PARAMETER SIMULATOR
                </span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-mono-code text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xs uppercase">
                CALIBRATED FORGE
              </span>
            </div>

            {/* Polymer Selection */}
            <div className="mb-6">
              <label className="block text-xs font-mono-code text-gray-400 uppercase mb-2">
                Step 1: Select Engineering Polymer Substrate
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'pctg', label: 'PCTG Copolymer', badge: 'High Impact' },
                  { id: 'pccf', label: 'PC-CF Carbon', badge: '114°C Temp' },
                  { id: 'tpu', label: 'TPU 95A Rubber', badge: 'Flexible' },
                  { id: 'pla', label: 'Tough PLA Pro', badge: 'High Detail' }
                ].map((poly) => (
                  <button
                    key={poly.id}
                    onClick={() => setSelectedPolymer(poly.id as any)}
                    className={`p-2.5 text-left rounded-xs border transition-all cursor-pointer ${
                      selectedPolymer === poly.id
                        ? 'bg-[#181C2E] border-[#00F0FF] text-white shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                        : 'bg-[#10121C] border-[#222538] text-gray-400 hover:text-white hover:border-gray-600'
                    }`}
                  >
                    <div className="text-xs font-bold font-mono-code">{poly.label}</div>
                    <div className="text-[10px] text-[#00F0FF] font-mono-code">{poly.badge}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Substrate Spec Readout */}
            <div className="p-3 bg-[#080910] border border-[#1C2030] rounded-xs mb-6 text-xs font-mono-code space-y-1.5">
              <div className="text-white font-bold">{currentPolymer.name}</div>
              <div className="text-gray-400 text-[11px]">
                <span className="text-[#39FF14]">Thermal Deflection:</span> {currentPolymer.hdt}
              </div>
              <div className="text-gray-400 text-[11px]">
                <span className="text-[#00F0FF]">Ideal Applications:</span> {currentPolymer.idealFor}
              </div>
            </div>

            {/* Infill Density Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-mono-code mb-2">
                <span className="text-gray-400 uppercase">Step 2: Internal Infill Density</span>
                <span className="text-[#00F0FF] font-bold">{infillDensity}% (Gyroid / Grid)</span>
              </div>
              <input
                type="range"
                min="15"
                max="100"
                step="5"
                value={infillDensity}
                onChange={(e) => setInfillDensity(parseInt(e.target.value))}
                className="w-full accent-[#00F0FF] bg-[#1E2235] h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono-code text-gray-500 mt-1">
                <span>15% (Lightweight Prototype)</span>
                <span>50% (Rigid Functional)</span>
                <span>100% (Solid Machined Density)</span>
              </div>
            </div>

            {/* Scale / Part Size */}
            <div className="mb-6">
              <label className="block text-xs font-mono-code text-gray-400 uppercase mb-2">
                Step 3: Approximate Part Volume
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'small', label: 'Small (< 100mm)', desc: 'Brackets, emblems' },
                  { id: 'medium', label: 'Medium (100–220mm)', desc: 'Switchgear, housings' },
                  { id: 'large', label: 'Large (220–350mm)', desc: 'Intakes, large displays' }
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setPartSize(size.id as any)}
                    className={`p-2 text-center rounded-xs border transition-all cursor-pointer ${
                      partSize === size.id
                        ? 'bg-[#D946EF]/20 border-[#D946EF] text-white shadow-[0_0_10px_rgba(217,70,239,0.3)]'
                        : 'bg-[#10121C] border-[#222538] text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold font-mono-code">{size.label}</div>
                    <div className="text-[9px] text-gray-500 truncate">{size.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Calculated Results Banner */}
            <div className="p-4 bg-[#141726] border border-[#2D3452] rounded-xs mb-6">
              <div className="grid grid-cols-2 gap-3 text-center font-mono-code">
                <div className="border-r border-[#242A42] pr-2">
                  <div className="text-[10px] text-gray-400 uppercase">Est. Machine Run Time</div>
                  <div className="text-xl font-bold text-[#00F0FF] mt-0.5">~{estimatedHours} Hours</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase">Est. Material Mass</div>
                  <div className="text-xl font-bold text-[#39FF14] mt-0.5">~{estimatedGrams} Grams</div>
                </div>
              </div>
            </div>

            {/* Push to Spec Builder Action */}
            <button
              onClick={handlePushToQuote}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-[#00F0FF] to-[#39FF14] hover:opacity-95 text-black font-mono-code font-bold uppercase tracking-wider text-xs transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer rounded-xs flex items-center justify-center gap-2"
            >
              <span>Export 3D Profile into Ink Lab Spec Builder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
