import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Cpu, Clock, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onRequestSimilar: (item: GalleryItem) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose, onRequestSimilar }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0C0E17] border-2 border-[#D946EF]/60 shadow-[0_0_50px_rgba(217,70,239,0.25)] rounded-xs overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Danger Accent Header */}
        <div className="h-1.5 w-full hazard-stripes" />

        <div className="p-4 sm:p-6 md:p-8">
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#222538] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 text-[10px] font-mono-code font-bold uppercase bg-[#D946EF]/20 text-[#D946EF] border border-[#D946EF]/40 rounded-xs">
                  {item.categoryLabel}
                </span>
                <span className="text-[11px] font-mono-code text-gray-500">
                  ID // {item.id.toUpperCase()}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-white">
                {item.title}
              </h2>
              <p className="text-sm font-mono-code text-[#00F0FF] mt-0.5">
                {item.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white bg-[#161826] hover:bg-[#202438] border border-[#2B304A] transition-colors rounded-xs cursor-pointer"
              title="Close Inspection Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Grid: Visual Showcase + Detailed Spec Ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Visual Panel */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-video sm:aspect-4/3 w-full bg-[#08080C] border border-[#222538] overflow-hidden rounded-xs group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-code text-gray-300">
                  <span className="bg-black/70 px-2 py-0.5 rounded-xs border border-white/10">
                    J FOX INK ARCHIVE
                  </span>
                  <span className="bg-black/70 px-2 py-0.5 rounded-xs text-[#39FF14] border border-[#39FF14]/30">
                    VERIFIED CRAFT
                  </span>
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-mono-code bg-[#141624] text-gray-300 border border-[#25293F] rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed pt-2">
                {item.description}
              </p>
            </div>

            {/* Technical Specifications Ledger */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-[#080910] p-4 sm:p-5 border border-[#1E2235] rounded-xs">
              <div>
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#1E2235]">
                  <Cpu className="w-4 h-4 text-[#00F0FF]" />
                  <span className="font-mono-code text-xs font-bold uppercase text-white tracking-wider">
                    SPECIFICATION LEDGER
                  </span>
                </div>

                <div className="space-y-3.5 text-xs font-mono-code">
                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">
                      MATERIAL &amp; SUBSTRATE
                    </span>
                    <span className="text-gray-200 font-semibold mt-0.5 block">
                      {item.specs.material}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">
                      CUT TOLERANCE / MEDIUM METHOD
                    </span>
                    <span className="text-[#00F0FF] font-semibold mt-0.5 block">
                      {item.specs.toleranceOrMedium}
                    </span>
                  </div>

                  {item.specs.dimensionsOrScale && (
                    <div>
                      <span className="text-gray-500 uppercase block text-[10px]">
                        DIMENSIONS / SCALE
                      </span>
                      <span className="text-gray-200 font-semibold mt-0.5 block">
                        {item.specs.dimensionsOrScale}
                      </span>
                    </div>
                  )}

                  {item.specs.finishType && (
                    <div>
                      <span className="text-gray-500 uppercase block text-[10px]">
                        FINISH &amp; SURFACE PROFILE
                      </span>
                      <span className="text-[#D946EF] font-semibold mt-0.5 block">
                        {item.specs.finishType}
                      </span>
                    </div>
                  )}

                  {item.specs.machineOrTool && (
                    <div>
                      <span className="text-gray-500 uppercase block text-[10px]">
                        MACHINE / TOOLING
                      </span>
                      <span className="text-[#39FF14] font-semibold mt-0.5 block">
                        {item.specs.machineOrTool}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-2 border-t border-[#1C2030]">
                    <Clock className="w-3.5 h-3.5 text-[#FF3E00]" />
                    <span className="text-gray-400 text-[11px]">
                      Est. Turnaround: <strong className="text-white">{item.specs.turnaround}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Commission Action */}
              <div className="pt-4 border-t border-[#1E2235]">
                <button
                  onClick={() => onRequestSimilar(item)}
                  className="w-full py-3 px-4 bg-[#00F0FF] hover:bg-[#39FF14] text-black font-mono-code font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] cursor-pointer rounded-xs flex items-center justify-center gap-2"
                >
                  <span>Request Similar Custom Build</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] font-mono-code text-center text-gray-500 mt-2">
                  Auto-populates project medium into the Ink Lab Spec Builder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
