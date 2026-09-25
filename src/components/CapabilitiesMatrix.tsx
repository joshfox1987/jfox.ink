import React, { useState } from 'react';
import { Layers, Scissors, Flame, ShieldCheck, CheckCircle2, ChevronRight, Cpu, Sparkles } from 'lucide-react';

export const CapabilitiesMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'materials'>('pipeline');

  const pipelineSteps = [
    {
      step: '01',
      title: 'Vector Architecture & Mathematical Nodes',
      shortDesc: 'Converting ideas, client scans, or raw sketches into razor-sharp Bézier paths.',
      details: [
        'Overhaul of low-res client art into mathematically perfect SVG / DXF vector paths.',
        'Offset contour calculation for vinyl cutter blade offsets (0.25mm blade drag compensation).',
        'Spot-color separations and trapping to eliminate substrate gapping during layered press.',
        'Parametric 3D CAD modeling with precise wall thicknesses and thermal shrink allowances.'
      ],
      tag: 'VECTOR STAGE'
    },
    {
      step: '02',
      title: 'Precision Cutting & Micro-Weeding',
      shortDesc: 'Plotting with optical camera alignment on industrial downforce cutters.',
      details: [
        '54" roll-feed high-speed cutting with OPOS multi-point optical registration marks.',
        'Tungsten carbide blades calibrated for thin 50-micron cast films up to thick 18-mil moto vinyl.',
        'Precision hand-weeding under high-intensity magnification lamps.',
        'High-tack and ultra-clear transfer tape application with zero trapped bubble tolerances.'
      ],
      tag: 'PLOTTER STAGE'
    },
    {
      step: '03',
      title: 'High-Temp Fusion & Multi-Material Sintering',
      shortDesc: 'Pneumatic thermal bonding and Klipper-controlled additive manufacturing.',
      details: [
        'Stahls 16x20 auto-opening pneumatic heat press delivering repeatable 60-80 PSI pressure.',
        'Active temperature monitoring ensuring flawless puff expansion and metallic foil adherence.',
        'Voron CoreXY 3D printers running Klipper input shaping for vibration-free 0.08mm layer heights.',
        'High-temperature all-metal hotends operating up to 350°C for engineering-grade PCTG and Carbon Fiber.'
      ],
      tag: 'FABRICATION STAGE'
    },
    {
      step: '04',
      title: 'Hand-Finishing, 2K Clears & Quality Control',
      shortDesc: 'Artisanal physical inspection, thread insertion, and protective packaging.',
      details: [
        'Automotive-grade 2K urethane clear coats sprayed for deep gloss and UV resistance on art pieces.',
        'Heat-staked brass threaded M3/M4/M5 inserts installed in 3D prints for indestructible fasteners.',
        'Zero-defect razor edge trimming and backing paper release testing.',
        'Shipped in heavy-duty crush-resistant tubes and static-shielded industrial packaging.'
      ],
      tag: 'DELIVERY STAGE'
    }
  ];

  const materialMatrix = [
    {
      category: 'Cast vs. Calendered Vinyl',
      recommendedFor: 'Vehicles, Curves, Long-term Outdoors',
      rating: '8–12 Year Outdoor Life',
      notes: 'Cast vinyl (Oracal 951/3M 1080) has zero memory shrink. It conforms over vehicle rivets and compound curves. Calendered (651) is ideal for flat windows, signs, and dry indoors.'
    },
    {
      category: 'PCTG & Carbon Fiber PC',
      recommendedFor: 'Automotive Engine Bays, Functional Brackets',
      rating: '110°C+ Heat Deflection',
      notes: 'Superior chemical resistance to gas/oil compared to standard PLA. Infused with chopped carbon fiber filaments for tensile stiffness and stealth matte texture.'
    },
    {
      category: 'Dimensional 3D Puff HTV',
      recommendedFor: 'Heavyweight Streetwear & Hoodies',
      rating: '50+ Wash Cycles',
      notes: 'Expands into a rich, tactile 3D foam texture under pneumatic heat. Creates an aggressive retro streetwear feel that printed screen inks cannot match.'
    },
    {
      category: 'Archival India Ink & Bristol',
      recommendedFor: 'Fine Art Prints & Framing',
      rating: '100+ Year Lightfast',
      notes: 'Carbon-black pigment ink suspended in shellac binder on 300GSM acid-free 100% cotton rag. Deep, permanent black values that will never brown or fade.'
    }
  ];

  return (
    <section id="capabilities" className="relative py-20 bg-[#0B0C14] border-b border-[#222538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161826] border border-[#2B304A] text-xs font-mono-code text-[#00F0FF] rounded-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>FABRICATION METHODOLOGY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display uppercase tracking-wider text-white">
            THE CAPABILITIES MATRIX
          </h2>
          <p className="text-gray-400 font-mono-code text-xs sm:text-sm mt-2">
            Every project flows through our battle-tested 4-stage pipeline. 
            No outsourced corners, no automated compromises.
          </p>

          {/* Toggle Tabs */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-2 text-xs font-mono-code font-bold uppercase transition-all rounded-xs cursor-pointer ${
                activeTab === 'pipeline'
                  ? 'bg-[#00F0FF] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-[#151826] text-gray-300 border border-[#222538] hover:text-white'
              }`}
            >
              4-Phase Forge Pipeline
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-4 py-2 text-xs font-mono-code font-bold uppercase transition-all rounded-xs cursor-pointer ${
                activeTab === 'materials'
                  ? 'bg-[#D946EF] text-white shadow-[0_0_15px_rgba(217,70,239,0.4)]'
                  : 'bg-[#151826] text-gray-300 border border-[#222538] hover:text-white'
              }`}
            >
              Material Substrates &amp; Specs
            </button>
          </div>
        </div>

        {/* Tab 1: 4-Phase Pipeline */}
        {activeTab === 'pipeline' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#0E101A] border border-[#222538] hover:border-[#00F0FF]/60 p-6 rounded-xs flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-4xl text-[#00F0FF] group-hover:text-[#39FF14] transition-colors">
                      {step.step}
                    </span>
                    <span className="px-2 py-0.5 text-[9px] font-mono-code font-bold uppercase bg-[#181B2C] text-gray-400 border border-[#272C46] rounded-xs">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display uppercase tracking-wide text-white mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#D946EF] font-mono-code mb-4">
                    {step.shortDesc}
                  </p>

                  <ul className="space-y-2 text-xs text-gray-300">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C2030] flex items-center justify-between text-[10px] font-mono-code text-gray-500">
                  <span>STAGE VERIFIED</span>
                  <span className="text-[#00F0FF] flex items-center">
                    DETAILS <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Material Substrates */}
        {activeTab === 'materials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materialMatrix.map((mat) => (
              <div
                key={mat.category}
                className="bg-[#0E101A] border border-[#222538] hover:border-[#D946EF]/70 p-6 rounded-xs transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-display uppercase tracking-wider text-white">
                      {mat.category}
                    </h3>
                    <p className="text-xs font-mono-code text-[#00F0FF] mt-0.5">
                      Rec. For: {mat.recommendedFor}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono-code font-bold uppercase bg-[#D946EF]/20 text-[#D946EF] border border-[#D946EF]/40 rounded-xs shrink-0">
                    {mat.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mt-4">
                  {mat.notes}
                </p>

                <div className="mt-5 pt-3 border-t border-[#1C2030] flex items-center justify-between text-xs font-mono-code text-gray-400">
                  <span>Available in Ink Lab Spec Builder</span>
                  <span className="text-[#39FF14] font-bold">IN STOCK</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
