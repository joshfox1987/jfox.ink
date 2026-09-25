import React, { useState } from 'react';
import { Mail, Check, Copy, MapPin, Clock, ShieldAlert, Sparkles, Send, HelpCircle } from 'lucide-react';

export const DirectContact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(label);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const currentDate = new Date();
  const currentMonthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const faqs = [
    {
      q: 'Do you require minimum order quantities (MOQs)?',
      a: 'Never for custom craft. We fabricate single one-off sunstrips, one-off skate decks, bespoke 3D functional brackets, or small 15-piece apparel runs for bands and speed shops.'
    },
    {
      q: 'What vector formats should I provide for vinyl plotting?',
      a: 'We prefer native .SVG, .AI (Illustrator), .EPS, or .DXF with all typography converted to outlines/curves. If you only have a low-res image, select "Needs Vectorizing" in the Ink Lab.'
    },
    {
      q: 'How are vinyl orders packaged for shipping?',
      a: 'All vinyl decals and wraps are rolled with premium silicone release liner and shipped in heavy-duty crush-resistant spiral-wound mailing tubes. No folded creases ever.'
    },
    {
      q: 'Can you install vehicle vinyl or storefront signs locally?',
      a: 'Yes, local installation and mobile fleet application are available throughout Idaho and surrounding regional areas by appointment.'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-[#0A0B13] border-b border-[#222538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Live Callout */}
        <div className="mb-14 p-6 sm:p-8 bg-[#0F111D] border-2 border-[#39FF14]/40 rounded-xs shadow-[0_0_30px_rgba(57,255,20,0.1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center w-12 h-12 bg-[#121626] border border-[#39FF14] rounded-full shrink-0">
              <span className="animate-ping absolute h-8 w-8 rounded-full bg-[#39FF14] opacity-50" />
              <span className="h-4 w-4 rounded-full bg-[#39FF14]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-xs font-bold uppercase text-[#39FF14]">
                  LIVE COMMISSION STATUS // CURRENT CYCLE
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-white mt-0.5">
                ACCEPTING CUSTOM PROJECTS FOR {currentMonthYear.toUpperCase()}
              </h3>
              <p className="text-xs font-mono-code text-gray-400 mt-1">
                Typical shop queue latency: 24–48 hours for preliminary proofing and vector diagnostics.
              </p>
            </div>
          </div>

          <a
            href="#spec-builder"
            className="px-6 py-3 bg-[#39FF14] hover:bg-[#00F0FF] text-black font-mono-code font-bold uppercase text-xs tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(57,255,20,0.4)] rounded-xs shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 fill-black" />
            <span>Launch Spec Builder</span>
          </a>
        </div>

        {/* Contact Info & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono-code text-xs font-bold text-[#00F0FF] uppercase tracking-widest">
                DIRECT INQUIRY DESK
              </span>
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-wider text-white mt-1">
                CONNECT WITH JOSH FOX
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-mono-code mt-2 leading-relaxed">
                Direct lines with zero middleman filters. Reach out for technical consultation, 
                high-volume fleet contracts, or experimental fabrication inquiries.
              </p>
            </div>

            {/* Email Channels */}
            <div className="space-y-3">
              <div className="p-4 bg-[#0E101A] border border-[#222538] rounded-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-code uppercase text-gray-500 block">
                    PRIMARY INQUIRY &amp; ORDERS
                  </span>
                  <span className="text-sm font-mono-code font-bold text-[#00F0FF]">
                    orders@jfox.ink
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard('orders@jfox.ink', 'orders')}
                  className="px-3 py-1.5 bg-[#171A29] hover:bg-[#20253A] border border-[#2B314C] text-xs font-mono-code text-gray-300 hover:text-white rounded-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail === 'orders' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#39FF14]" />
                      <span className="text-[#39FF14]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-[#0E101A] border border-[#222538] rounded-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-code uppercase text-gray-500 block">
                    DIRECT ARTISAN INBOX
                  </span>
                  <span className="text-sm font-mono-code font-bold text-gray-300">
                    joshfox1987@gmail.com
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard('joshfox1987@gmail.com', 'direct')}
                  className="px-3 py-1.5 bg-[#171A29] hover:bg-[#20253A] border border-[#2B314C] text-xs font-mono-code text-gray-300 hover:text-white rounded-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  title="Copy direct email to clipboard"
                >
                  {copiedEmail === 'direct' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#39FF14]" />
                      <span className="text-[#39FF14]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Operating Hours */}
              <div className="p-4 bg-[#0E101A] border border-[#222538] rounded-xs flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[#FF3E00] shrink-0" />
                <div className="text-xs font-mono-code">
                  <span className="text-white font-bold block">Boise &amp; Treasure Valley, Idaho</span>
                  <span className="text-gray-400 text-[11px]">Worldwide shipping on vinyl, apparel &amp; 3D prints</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fabrication FAQs & Standards */}
          <div className="lg:col-span-7 bg-[#0E101A] border border-[#222538] p-6 sm:p-8 rounded-xs">
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-[#222538]">
              <HelpCircle className="w-4 h-4 text-[#D946EF]" />
              <span className="font-mono-code text-xs font-bold uppercase text-white tracking-wider">
                FABRICATION STANDARDS &amp; FAQ
              </span>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-3.5 bg-[#090A10] border border-[#1A1D2E] rounded-xs">
                  <h4 className="text-xs sm:text-sm font-heading font-bold text-white mb-1.5">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-gray-300 font-mono-code leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
