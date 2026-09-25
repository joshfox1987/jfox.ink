import React, { useState } from 'react';
import { Menu, X, Flame, ShieldAlert, Sparkles, Send } from 'lucide-react';
import { AmpWidget } from './AmpWidget';

interface HeaderProps {
  onOpenSpecBuilder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSpecBuilder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Vault', href: '#vault', tag: '8 Pillars' },
    { label: 'Capabilities', href: '#capabilities', tag: 'Matrix' },
    { label: '3D Lab', href: '#lab3d', tag: 'Klipper' },
    { label: 'About Josh', href: '#about', tag: 'Story' },
    { label: 'Spec Builder', href: '#spec-builder', tag: 'Quote' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#08080C]/90 backdrop-blur-md border-b border-[#222538]">
      {/* Top Warning Stripe Accent */}
      <div className="h-1 w-full hazard-stripes-cyan opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Tag */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Custom Brand Icon / Blade Mark */}
            <div className="relative w-11 h-11 bg-[#121420] border-2 border-[#D946EF] flex items-center justify-center overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
              <span className="font-display text-2xl font-bold text-white tracking-wider">JF</span>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-[#00F0FF] transform rotate-45" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl tracking-wider text-white group-hover:text-[#00F0FF] transition-colors leading-none">
                  J FOX INK
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono-code font-bold uppercase bg-[#D946EF]/20 text-[#D946EF] border border-[#D946EF]/40 rounded-xs">
                  ID • USA
                </span>
              </div>
              <p className="font-mono-code text-[10px] tracking-widest text-gray-400 uppercase hidden sm:block">
                Precision Vinyl // Digital Forge // jfox.ink
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-3 py-1.5 text-xs font-mono-code uppercase font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-transparent group-hover:bg-[#00F0FF] transition-all shadow-[0_0_8px_#00F0FF]" />
              </a>
            ))}
          </nav>

          {/* Right Action Stack: Amp Visualizer + Quick CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Interactive Procedural Metal Amp */}
            <AmpWidget compact />

            {/* Fast Commission CTA */}
            <button
              onClick={onOpenSpecBuilder}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono-code font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-[#39FF14] border border-[#00F0FF] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] cursor-pointer rounded-xs"
            >
              <Flame className="w-3.5 h-3.5 fill-black" />
              <span>Commission</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white border border-[#272738] bg-[#121420] lg:hidden rounded-xs cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D946EF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#222538] bg-[#0A0B12] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xs font-mono-code text-sm uppercase text-gray-200 hover:bg-[#161826] hover:text-[#00F0FF] border-l-2 border-transparent hover:border-[#00F0FF] transition-all"
            >
              <span>{link.label}</span>
              <span className="text-[10px] text-gray-500 font-mono-code">{link.tag}</span>
            </a>
          ))}
          <div className="pt-3 border-t border-[#222538]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpecBuilder();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono-code font-bold uppercase bg-[#00F0FF] text-black rounded-xs shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <Send className="w-4 h-4" />
              <span>Launch Spec Builder</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
