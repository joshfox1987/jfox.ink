import React from 'react';
import { ArrowDown, Flame, Zap, ShieldAlert, Cpu, Sparkles, CheckCircle2, Sliders } from 'lucide-react';

interface HeroProps {
  onOpenSpecBuilder: () => void;
  onExploreVault: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSpecBuilder, onExploreVault }) => {
  return (
    <section className="relative overflow-hidden bg-[#08080C] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#222538]">
      {/* Background Ambience: Cyber Grid + Halftone Matrix + Neon Glows */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-halftone pointer-events-none opacity-30" />
      
      {/* Atmospheric Radial Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D946EF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Crosshair Markings */}
      <div className="absolute top-6 left-6 font-mono-code text-[10px] text-gray-600 hidden md:block select-none">
        <span>LOC // 43.6150° N, 116.2023° W</span>
        <br />
        <span>SYS // PLOTTER_STATION_01 [ONLINE]</span>
      </div>
      <div className="absolute top-6 right-6 font-mono-code text-[10px] text-gray-600 hidden md:block text-right select-none">
        <span>TOLERANCE // ±0.05MM MICRO-STEP</span>
        <br />
        <span>DOMAIN // JFOX.INK</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Live Production Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121422] border border-[#2B304A] text-xs font-mono-code mb-8 shadow-[0_0_15px_rgba(0,0,0,0.6)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
            </span>
            <span className="text-gray-300 font-semibold tracking-wide">
              LIVE FORGE STATUS:
            </span>
            <span className="text-[#00F0FF] font-bold uppercase">
              Accepting Custom Commissions // 2026 Season
            </span>
          </div>

          {/* Kinetic Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display uppercase tracking-wider text-white leading-[0.9] mb-6 drop-shadow-2xl">
            NOT AN AGENCY.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#D946EF] to-[#FF3E00] drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">
              A CUSTOM FABRICATION FORGE.
            </span>
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
            High-voltage craftsmanship for clients who demand the uncompromising. 
            From <span className="text-[#00F0FF] font-bold">54-inch plotted cast vinyl</span> &amp; 
            commercial fleet graphics to <span className="text-[#D946EF] font-bold">fine archival inks</span>, 
            streetwear transfers, and <span className="text-[#39FF14] font-bold">Klipper 3D rapid prototyping</span>.
          </p>

          {/* Kinetic Badge Rack */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#12131C] border border-[#FF3E00]/40 rounded-xs text-xs font-mono-code text-gray-200">
              <Flame className="w-3.5 h-3.5 text-[#FF3E00]" />
              <span className="font-bold">Zero Stock Templates</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#12131C] border border-[#00F0FF]/40 rounded-xs text-xs font-mono-code text-gray-200">
              <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="font-bold">Handmade &amp; Precision Cut</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#12131C] border border-[#39FF14]/40 rounded-xs text-xs font-mono-code text-gray-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" />
              <span className="font-bold">Idaho Born &amp; Fabricated</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#12131C] border border-[#D946EF]/40 rounded-xs text-xs font-mono-code text-gray-200">
              <Cpu className="w-3.5 h-3.5 text-[#D946EF]" />
              <span className="font-bold">Vector CAD &amp; Physical Craft</span>
            </div>
          </div>

          {/* Dual High-Impact Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSpecBuilder}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D946EF] to-[#FF3E00] hover:from-[#e15bf5] hover:to-[#ff5219] text-white font-mono-code font-bold uppercase tracking-wider text-sm transition-all duration-200 shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:shadow-[0_0_35px_rgba(255,62,0,0.7)] transform hover:-translate-y-0.5 cursor-pointer rounded-xs flex items-center justify-center gap-2.5"
            >
              <Flame className="w-4 h-4 fill-white" />
              <span>Commission Custom Work</span>
            </button>

            <button
              onClick={onExploreVault}
              className="w-full sm:w-auto px-8 py-4 bg-[#121420] hover:bg-[#1A1D2E] text-[#00F0FF] hover:text-white border-2 border-[#00F0FF]/50 hover:border-[#00F0FF] font-mono-code font-bold uppercase tracking-wider text-sm transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5 cursor-pointer rounded-xs flex items-center justify-center gap-2"
            >
              <span>Enter The Vault</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Studio Equipment & Specs Hardware Ticker */}
        <div className="mt-16 pt-8 border-t border-[#1C2030] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3.5 bg-[#0E101A] border border-[#1E2235] rounded-xs">
            <div className="text-[10px] font-mono-code text-[#00F0FF] font-bold uppercase mb-1">
              VINYL CUTTER
            </div>
            <div className="text-sm font-bold text-white font-heading">
              54&quot; Roland CAMM-1 Pro
            </div>
            <div className="text-[11px] text-gray-400 font-mono-code mt-0.5">
              Optical contour alignment
            </div>
          </div>

          <div className="p-3.5 bg-[#0E101A] border border-[#1E2235] rounded-xs">
            <div className="text-[10px] font-mono-code text-[#D946EF] font-bold uppercase mb-1">
              3D FAB LAB
            </div>
            <div className="text-sm font-bold text-white font-heading">
              Klipper CoreXY Array
            </div>
            <div className="text-[11px] text-gray-400 font-mono-code mt-0.5">
              PCTG / Carbon Fiber / TPU
            </div>
          </div>

          <div className="p-3.5 bg-[#0E101A] border border-[#1E2235] rounded-xs">
            <div className="text-[10px] font-mono-code text-[#39FF14] font-bold uppercase mb-1">
              HEAT PRESS
            </div>
            <div className="text-sm font-bold text-white font-heading">
              Stahls Pneumatic 16x20
            </div>
            <div className="text-[11px] text-gray-400 font-mono-code mt-0.5">
              80 PSI uniform cold peel
            </div>
          </div>

          <div className="p-3.5 bg-[#0E101A] border border-[#1E2235] rounded-xs">
            <div className="text-[10px] font-mono-code text-[#FF3E00] font-bold uppercase mb-1">
              FINE ART ATELIER
            </div>
            <div className="text-sm font-bold text-white font-heading">
              Iwata Airbrush &amp; Ink
            </div>
            <div className="text-[11px] text-gray-400 font-mono-code mt-0.5">
              2K Urethane &amp; India Ink
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
