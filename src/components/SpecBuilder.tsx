import React, { useState, useEffect } from 'react';
import { 
  Send, Copy, Check, Save, RotateCcw, Flame, Sparkles, 
  HelpCircle, Clock, DollarSign, Layers, ShieldCheck, FileText 
} from 'lucide-react';
import { MediumType, SpecBuilderForm } from '../types';

interface SpecBuilderProps {
  initialMedium?: MediumType;
  initialNotes?: string;
}

const DEFAULT_FORM: SpecBuilderForm = {
  projectType: 'car-vinyl',
  projectTitle: '',
  dimensions: '12" x 24"',
  quantity: 1,
  colorCount: 1,
  materialFinish: 'Matte Onyx Black',
  vectorReadiness: 'ready-vector',
  deadlineUrgency: 'standard',
  budgetBracket: '$150 – $350',
  notes: '',
  contactName: '',
  contactEmail: '',
  contactPhone: ''
};

export const SpecBuilder: React.FC<SpecBuilderProps> = ({ initialMedium, initialNotes }) => {
  const [form, setForm] = useState<SpecBuilderForm>(() => {
    // Attempt local storage restoration
    try {
      const saved = localStorage.getItem('jfox_ink_spec_draft');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_FORM;
  });

  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  // Sync external preloads (e.g. from 3D Lab or Vault)
  useEffect(() => {
    if (initialMedium) {
      setForm((prev) => ({ ...prev, projectType: initialMedium }));
    }
  }, [initialMedium]);

  useEffect(() => {
    if (initialNotes) {
      setForm((prev) => ({
        ...prev,
        notes: prev.notes ? `${prev.notes}\n\n${initialNotes}` : initialNotes
      }));
    }
  }, [initialNotes]);

  const mediumOptions: { id: MediumType; label: string; icon: string; typicalTurnaround: string }[] = [
    { id: 'car-vinyl', label: 'Car & Fleet Vinyl', icon: '🚗', typicalTurnaround: '3–5 Days' },
    { id: 'commercial-sign', label: 'Storefront & Signs', icon: '🏢', typicalTurnaround: '4–7 Days' },
    { id: 'apparel-htv', label: 'Apparel & Merch', icon: '👕', typicalTurnaround: '3–5 Days' },
    { id: 'paintings', label: 'Original Painting', icon: '🎨', typicalTurnaround: '1–2 Weeks' },
    { id: 'fine-art', label: 'Fine Art & Ink Drawing', icon: '🖋️', typicalTurnaround: '1–2 Weeks' },
    { id: 'tattoo-flash', label: 'Tattoo Concept Art', icon: '💀', typicalTurnaround: '5–7 Days' },
    { id: 'fabrication-3d', label: '3D Fabrication / Print', icon: '⚙️', typicalTurnaround: '2–4 Days' },
    { id: 'web-digital', label: 'Digital / Web Build', icon: '💻', typicalTurnaround: '1–2 Weeks' }
  ];

  // Dynamic estimate calculator
  const calculateEstimates = () => {
    let basePrice = 75;
    let baseDays = 4;

    switch (form.projectType) {
      case 'car-vinyl':
        basePrice = 120 + form.colorCount * 35;
        baseDays = 4;
        break;
      case 'commercial-sign':
        basePrice = 180 + form.colorCount * 40;
        baseDays = 5;
        break;
      case 'apparel-htv':
        basePrice = 65 + form.quantity * 22;
        baseDays = 3;
        break;
      case 'paintings':
        basePrice = 350;
        baseDays = 12;
        break;
      case 'fine-art':
        basePrice = 220;
        baseDays = 9;
        break;
      case 'tattoo-flash':
        basePrice = 150;
        baseDays = 6;
        break;
      case 'fabrication-3d':
        basePrice = 85 + form.quantity * 25;
        baseDays = 3;
        break;
      case 'web-digital':
        basePrice = 750;
        baseDays = 10;
        break;
    }

    if (form.vectorReadiness === 'needs-vectorizing') basePrice += 45;
    if (form.vectorReadiness === 'full-concept') basePrice += 120;

    if (form.deadlineUrgency === 'rush') {
      basePrice = Math.round(basePrice * 1.35);
      baseDays = Math.max(2, Math.floor(baseDays * 0.5));
    } else if (form.deadlineUrgency === 'emergency-gig') {
      basePrice = Math.round(basePrice * 1.75);
      baseDays = 1;
    }

    const minPrice = Math.round(basePrice * 0.85);
    const maxPrice = Math.round(basePrice * 1.25);

    return {
      priceRange: `$${minPrice} – $${maxPrice}`,
      days: `${baseDays}–${baseDays + 2} Business Days`
    };
  };

  const estimates = calculateEstimates();

  const generateTicketText = () => {
    return `================================================
J FOX INK // CUSTOM PROJECT SPEC TICKET
DOMAIN: JFOX.INK | DIRECT CONTACT: orders@jfox.ink
================================================

[CLIENT CONTACT]
Name: ${form.contactName || 'Not specified'}
Email: ${form.contactEmail || 'Not specified'}
Phone: ${form.contactPhone || 'N/A'}

[PROJECT PARAMETERS]
Project Title: ${form.projectTitle || 'Untitled Custom Project'}
Medium: ${mediumOptions.find((m) => m.id === form.projectType)?.label || form.projectType}
Dimensions / Scale: ${form.dimensions}
Quantity: ${form.quantity} unit(s)
Color / Layer Count: ${form.colorCount}
Surface Finish: ${form.materialFinish}

[ARTWORK STATUS]
Vector Readiness: ${form.vectorReadiness.toUpperCase()}
Deadline Urgency: ${form.deadlineUrgency.toUpperCase()}
Target Budget: ${form.budgetBracket}

[ESTIMATED ESTIMATES (PRELIMINARY)]
Estimated Cost Bracket: ${estimates.priceRange}
Estimated Turnaround: ${estimates.days}

[SPECIFICATION NOTES & DETAILS]
${form.notes || 'None provided.'}

================================================
Generated via J Fox Ink Spec Engine (Client-Side Static)
================================================`;
  };

  const handleCopyTicket = async () => {
    const text = generateTicketText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleSaveDraft = () => {
    try {
      localStorage.setItem('jfox_ink_spec_draft', JSON.stringify(form));
      setSavedNotice(true);
      setTimeout(() => setSavedNotice(false), 2500);
    } catch {
      // error saving
    }
  };

  const handleResetForm = () => {
    if (window.confirm('Reset all parameters in this spec draft?')) {
      setForm(DEFAULT_FORM);
      localStorage.removeItem('jfox_ink_spec_draft');
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `[Commission Inquiry] ${form.projectTitle || 'New Custom Project'} (${mediumOptions.find((m) => m.id === form.projectType)?.label})`
    );
    const body = encodeURIComponent(generateTicketText());
    return `mailto:orders@jfox.ink?subject=${subject}&body=${body}`;
  };

  return (
    <section id="spec-builder" className="relative py-20 bg-[#08080C] border-b border-[#222538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121422] border border-[#272D48] text-xs font-mono-code text-[#00F0FF] rounded-xs mb-3">
            <Flame className="w-3.5 h-3.5 text-[#FF3E00]" />
            <span>THE INK LAB // ZERO-OVERHEAD ESTIMATOR</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-wider text-white">
            PROJECT SPEC BUILDER &amp; QUOTE GENERATOR
          </h2>
          <p className="text-gray-400 font-mono-code text-xs sm:text-sm mt-2">
            Configure your technical parameters below. Generates an instant verifiable spec ticket 
            and prepares a direct mailto dispatch formatted for <strong className="text-white">orders@jfox.ink</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Spec Inputs Form */}
          <div className="lg:col-span-8 bg-[#0D0F18] border border-[#22263C] p-6 sm:p-8 rounded-xs space-y-8">
            {/* Step 1: Medium Selection */}
            <div>
              <label className="block text-xs font-mono-code text-gray-400 uppercase mb-3 flex items-center justify-between">
                <span>01. Select Production Medium</span>
                <span className="text-[#00F0FF]">Required</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {mediumOptions.map((med) => (
                  <button
                    key={med.id}
                    type="button"
                    onClick={() => setForm({ ...form, projectType: med.id })}
                    className={`p-3 text-left rounded-xs border transition-all cursor-pointer flex flex-col justify-between ${
                      form.projectType === med.id
                        ? 'bg-[#181C2E] border-[#D946EF] text-white shadow-[0_0_12px_rgba(217,70,239,0.3)]'
                        : 'bg-[#0E101A] border-[#222538] text-gray-400 hover:text-gray-200 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-xl mb-1">{med.icon}</div>
                    <div className="text-xs font-bold font-heading">{med.label}</div>
                    <div className="text-[10px] text-gray-500 font-mono-code mt-1">
                      {med.typicalTurnaround}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Title & Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1.5">
                  02. Project Title / Vehicle Model / Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2024 Tacoma Windshield Sunstrip"
                  value={form.projectTitle}
                  onChange={(e) => setForm({ ...form, projectTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1.5">
                  Dimensions / Scale (Width x Height)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 52 inches x 8.5 inches"
                  value={form.dimensions}
                  onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                />
              </div>
            </div>

            {/* Step 3: Quantities, Color Counts, Finish */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1.5">
                  Quantity Required
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
                  className="w-full px-3.5 py-2.5 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1.5">
                  Color / Layer Count
                </label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={form.colorCount}
                  onChange={(e) => setForm({ ...form, colorCount: Math.max(1, parseInt(e.target.value) || 1) })}
                  className="w-full px-3.5 py-2.5 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1.5">
                  Material &amp; Finish Profile
                </label>
                <select
                  value={form.materialFinish}
                  onChange={(e) => setForm({ ...form, materialFinish: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                >
                  <option value="Matte Onyx Black">Matte Onyx Black</option>
                  <option value="High-Gloss Cast Vinyl">High-Gloss Cast Vinyl</option>
                  <option value="Prismatic Holographic">Prismatic Holographic</option>
                  <option value="Retro-Reflective Yellow/White">Retro-Reflective Safety</option>
                  <option value="Carbon Fiber 3D Weave">Carbon Fiber 3D Weave</option>
                  <option value="Tactical 3D Puff HTV (Apparel)">Tactical 3D Puff HTV (Apparel)</option>
                  <option value="PCTG / Carbon Fiber PC (3D Print)">PCTG / Carbon Fiber PC (3D)</option>
                  <option value="Archival India Ink on Bristol">Archival India Ink on Bristol</option>
                </select>
              </div>
            </div>

            {/* Step 4: Artwork Readiness & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1.5">
                  Vector Art Readiness State
                </label>
                <select
                  value={form.vectorReadiness}
                  onChange={(e) => setForm({ ...form, vectorReadiness: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                >
                  <option value="ready-vector">I have print-ready vector files (.SVG, .AI, .DXF, .PDF)</option>
                  <option value="needs-vectorizing">I have a raster logo/sketch that needs vectorizing</option>
                  <option value="full-concept">I need full concept design from scratch</option>
                  <option value="physical-sketch">Physical sketch or photo reference to interpret</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1.5">
                  Deadline Urgency Schedule
                </label>
                <select
                  value={form.deadlineUrgency}
                  onChange={(e) => setForm({ ...form, deadlineUrgency: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                >
                  <option value="standard">Standard Production (3–7 Business Days)</option>
                  <option value="rush">Priority Rush (48–72 Hours)</option>
                  <option value="emergency-gig">Emergency Gig (24-Hour Expedited Forge)</option>
                </select>
              </div>
            </div>

            {/* Step 5: Contact Information */}
            <div className="border-t border-[#1C2030] pt-6 space-y-4">
              <h3 className="text-xs font-mono-code font-bold uppercase text-[#00F0FF] tracking-wider">
                Client Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code text-gray-400 uppercase mb-1">
                    Your Name / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Mercer"
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    className="w-full px-3 py-2 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code text-gray-400 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. alex@speedshop.com"
                    value={form.contactEmail}
                    onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                    className="w-full px-3 py-2 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code text-gray-400 uppercase mb-1">
                    Phone / Signal (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. (208) 555-0199"
                    value={form.contactPhone}
                    onChange={(e) => setForm({ ...form, contactPhone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-code text-gray-400 uppercase mb-1">
                  Project Notes, Substrate Demands, or File Links
                </label>
                <textarea
                  rows={4}
                  placeholder="Paste Dropbox/Google Drive links to your vector assets, describe substrate curvature, color matches, or technical details..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full p-3 bg-[#090A10] border border-[#242940] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-white rounded-xs leading-relaxed"
                />
              </div>

              {/* Draft Storage Controls */}
              <div className="flex items-center justify-between text-xs font-mono-code pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141726] hover:bg-[#1D2238] border border-[#282E48] text-gray-300 hover:text-white rounded-xs cursor-pointer transition-colors"
                  >
                    <Save className="w-3.5 h-3.5 text-[#39FF14]" />
                    <span>Save Draft to Storage</span>
                  </button>
                  {savedNotice && (
                    <span className="text-[#39FF14] text-[11px] animate-pulse">
                      ✓ Draft Saved Locally
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="flex items-center gap-1 text-gray-500 hover:text-red-400 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Form</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Ticket & Action Output Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Live Estimator Readout Card */}
            <div className="bg-[#0C0E18] border-2 border-[#D946EF]/50 p-6 rounded-xs shadow-[0_0_30px_rgba(217,70,239,0.15)] relative overflow-hidden">
              <div className="h-1 w-full hazard-stripes absolute top-0 left-0" />

              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222538]">
                <span className="font-mono-code text-xs font-bold uppercase text-white tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D946EF]" />
                  ESTIMATOR SUMMARY
                </span>
                <span className="text-[10px] font-mono-code text-[#00F0FF] uppercase">
                  ZERO CLIENT OVERHEAD
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 bg-[#121422] border border-[#242A44] rounded-xs">
                  <div className="text-[10px] font-mono-code text-gray-400 uppercase">
                    ESTIMATED PRODUCTION BRACKET
                  </div>
                  <div className="text-3xl font-display text-[#39FF14] mt-0.5 tracking-wider">
                    {estimates.priceRange}
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono-code mt-1">
                    *Final price confirmed after vector nodes &amp; square footage audit.
                  </div>
                </div>

                <div className="p-3.5 bg-[#121422] border border-[#242A44] rounded-xs">
                  <div className="text-[10px] font-mono-code text-gray-400 uppercase">
                    ESTIMATED SHOP TURNAROUND
                  </div>
                  <div className="text-xl font-bold font-mono-code text-white mt-0.5">
                    {estimates.days}
                  </div>
                </div>

                {/* Substrate Verification Checklist */}
                <div className="space-y-1.5 text-[11px] font-mono-code text-gray-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#39FF14]" />
                    <span>Commercial Grade Film / Ink</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#39FF14]" />
                    <span>Optical Contour Blade Vectorized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#39FF14]" />
                    <span>Direct Artisan Inspection (Josh Fox)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-[#222538] space-y-3">
                {/* 1. Direct Mailto Trigger */}
                <a
                  href={getMailtoLink()}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#D946EF] to-[#FF3E00] hover:opacity-90 text-white font-mono-code font-bold uppercase tracking-wider text-xs transition-all shadow-[0_0_20px_rgba(217,70,239,0.4)] cursor-pointer rounded-xs flex items-center justify-center gap-2 text-center"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Send Ticket to orders@jfox.ink</span>
                </a>

                {/* 2. Copy Ticket to Clipboard */}
                <button
                  type="button"
                  onClick={handleCopyTicket}
                  className="w-full py-3 px-4 bg-[#141726] hover:bg-[#1D2138] border border-[#282E48] hover:border-[#00F0FF] text-gray-200 hover:text-white font-mono-code font-bold uppercase tracking-wider text-xs transition-all cursor-pointer rounded-xs flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#39FF14]" />
                      <span className="text-[#39FF14]">Copied Ticket to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#00F0FF]" />
                      <span>Copy Spec Sheet to Clipboard</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 text-[10px] font-mono-code text-gray-500 text-center">
                100% Free Static Architecture • Zero Spying • LocalStorage Draft
              </div>
            </div>

            {/* Direct Channel Fallback Card */}
            <div className="bg-[#0A0B12] border border-[#1C2030] p-4 rounded-xs text-xs font-mono-code space-y-2 text-gray-400">
              <div className="text-white font-bold uppercase text-[11px] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#00F0FF]" />
                Direct Communication Protocol
              </div>
              <p className="text-[11px] leading-relaxed">
                Prefer direct messaging or custom file transfer? You can email vector packages directly to:
              </p>
              <div className="p-2 bg-[#121420] border border-[#22263C] text-[#00F0FF] font-bold select-all rounded-xs">
                orders@jfox.ink
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
