import React from 'react';
import { ArrowUp, Github, Flame, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05060A] border-t border-[#1C2030] text-gray-400">
      {/* Bottom Danger Stripe */}
      <div className="h-1 w-full hazard-stripes opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#181B2B]">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#121420] border-2 border-[#00F0FF] flex items-center justify-center font-display text-xl font-bold text-white transform -rotate-3">
                JF
              </div>
              <span className="font-display text-3xl tracking-wider text-white">
                J FOX INK
              </span>
            </div>
            <p className="font-mono-code text-xs text-gray-400 mt-2 max-w-md">
              Precision Vinyl. Raw Custom Graphics. Digital 3D Fabrication.
              <br />
              Zero corporate templates. 100% bespoke craftsmanship out of Idaho.
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap gap-4 text-xs font-mono-code uppercase text-gray-400">
            <a href="#vault" className="hover:text-[#00F0FF] transition-colors">The Vault</a>
            <a href="#capabilities" className="hover:text-[#00F0FF] transition-colors">Capabilities</a>
            <a href="#lab3d" className="hover:text-[#00F0FF] transition-colors">3D Lab</a>
            <a href="#about" className="hover:text-[#00F0FF] transition-colors">About Josh</a>
            <a href="#spec-builder" className="hover:text-[#00F0FF] transition-colors">Spec Builder</a>
            <a href="#contact" className="hover:text-[#00F0FF] transition-colors">Contact</a>
          </div>

          {/* Return To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#121422] hover:bg-[#1A1E32] border border-[#272D48] hover:border-[#00F0FF] text-gray-300 hover:text-white rounded-xs transition-colors cursor-pointer flex items-center gap-2 text-xs font-mono-code uppercase"
            title="Return to Forge Top"
          >
            <ArrowUp className="w-4 h-4 text-[#00F0FF]" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom Credits & Zero Cost Architecture Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-gray-500">
          <div>
            © {new Date().getFullYear()} J Fox Ink (jfox.ink). All rights reserved.
          </div>

          {/* Zero-Bloat Static Engine Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#0A0C14] border border-[#1A1F33] rounded-xs text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#39FF14]" />
            <span className="text-gray-400">
              100% Free-Tier Static Architecture • GitHub Pages Ready • Web Audio Engine
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
