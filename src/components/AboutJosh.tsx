import React from 'react';
import { Skull, Compass, Wrench, Flame, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { WORKSHOP_SPECS } from '../data/galleryData';

export const AboutJosh: React.FC = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Pencil Stipple & Punk Flyers',
      desc: 'Began hand-rendering album covers, xeroxed show flyers, and custom grip tape art in garage studios under tungsten work lamps.'
    },
    {
      year: '2014',
      title: 'Mastering the Blade & Transfer Vinyl',
      desc: 'Acquired first commercial plotting cutter. Devoted thousands of hours to blade offset calibration, weed speed, and compound vehicle curvature application.'
    },
    {
      year: '2019',
      title: 'High-Temp Thermal & Merch Production',
      desc: 'Integrated pneumatic commercial heat presses, dimensional puff HTV, and screen separations for touring rock acts and local speed shops.'
    },
    {
      year: '2022',
      title: 'Additive Manufacturing & Klipper CoreXY',
      desc: 'Engineered custom enclosed 3D printing rigs running Klipper firmware for industrial engineering polymers (PCTG, Carbon Fiber PC, Shore 95A TPU).'
    },
    {
      year: 'PRESENT',
      title: 'J Fox Ink: The Unapologetic Custom Forge',
      desc: 'Operating out of Idaho with global reach. Producing 100% custom, zero-template physical & digital artifacts for uncompromising visionaries.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#0A0B13] border-b border-[#222538] overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D946EF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Title */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141624] border border-[#272B44] text-xs font-mono-code text-[#D946EF] rounded-xs mb-3">
            <Skull className="w-3.5 h-3.5" />
            <span>ORIGIN &amp; CRAFTSMAN MANIFESTO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-wider text-white">
            MEET JOSH FOX: THE ARTISAN BEHIND THE BLADE
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            &quot;If an idea came out of a corporate stock template library, it has no soul and 
            doesn&apos;t belong in my forge. Every millimeter of vinyl we weed, every drop of ink we lay, 
            and every polymer part we sinter is custom engineered from scratch.&quot;
          </p>
        </div>

        {/* Narrative & Photo / Atelier Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              I founded <strong className="text-white">J Fox Ink</strong> with a single driving principle: 
              bring relentless, blue-collar precision and uncompromising underground aesthetics back to physical fabrication. 
              Modern digital agencies love to hide behind slick pitch decks while outsourcing their manufacturing to bottom-dollar overseas vendors.
            </p>

            <p>
              That is not how we work here. When you commission a project with J Fox Ink, you deal directly with the 
              craftsman holding the squeegee, tuning the blade pressure, calibrating the extruder steps, and inspecting the vector curves.
            </p>

            <div className="p-4 bg-[#10121E] border-l-4 border-[#00F0FF] my-6 rounded-r-xs">
              <h4 className="text-white font-heading font-bold text-sm uppercase mb-1">
                The Non-Negotiable Standard:
              </h4>
              <p className="text-xs font-mono-code text-gray-300">
                • 0% AI-generated slop in final vinyl output<br />
                • 100% human-vectored paths &amp; manual kerning<br />
                • Premium grade automotive films (3M / Oracal / Avery)<br />
                • Built to endure track days, high pressure washes, and outdoor sun
              </p>
            </div>

            <p>
              Rooted in the grit of heavy metal music, skate culture, and custom automotive mechanicals, every 
              piece leaving our Idaho forge carries an aggressive spirit that demands attention.
            </p>
          </div>

          {/* Workshop Arsenal Specs Card */}
          <div className="lg:col-span-5 bg-[#0D0E18] border border-[#242940] p-6 rounded-xs">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#222538]">
              <Wrench className="w-4 h-4 text-[#39FF14]" />
              <span className="font-mono-code text-xs font-bold uppercase text-white tracking-wider">
                PRIMARY WORKSHOP LOADOUT
              </span>
            </div>

            <div className="space-y-4">
              {WORKSHOP_SPECS.map((spec, i) => (
                <div key={i} className="pb-3 border-b border-[#1A1D2E] last:border-0 last:pb-0">
                  <div className="text-xs font-bold font-heading text-white">{spec.machine}</div>
                  <div className="text-[11px] text-[#00F0FF] font-mono-code mt-0.5">{spec.capability}</div>
                  <div className="text-[10px] text-gray-400 font-mono-code mt-1">{spec.specs}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="border-t border-[#1E2235] pt-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-display uppercase tracking-wider text-white">
              CRAFTSMAN EVOLUTION TIMELINE
            </h3>
            <p className="text-xs font-mono-code text-gray-400 mt-1">
              From underground flyer sketching to digital fabrication supremacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, index) => (
              <div
                key={m.year}
                className="relative bg-[#0E101A] border border-[#222538] p-4 rounded-xs flex flex-col justify-between hover:border-[#D946EF]/70 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-code text-xs font-bold text-[#00F0FF] px-2 py-0.5 bg-[#141829] border border-[#252C4A] rounded-xs">
                      {m.year}
                    </span>
                    <span className="text-[10px] font-mono-code text-gray-600">
                      STEP 0{index + 1}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white mt-2 leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-mono-code mt-2 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
