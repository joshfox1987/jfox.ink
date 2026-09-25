import { GalleryCategory, GalleryItem } from '../types';

export const CATEGORIES: { id: GalleryCategory; label: string; countBadge?: string; description: string }[] = [
  { id: 'all', label: 'All Artifacts', description: 'Complete portfolio vault spanning physical craft and digital vectors.' },
  { id: 'car-vinyl', label: 'Car & Fleet Vinyl', description: 'High-speed cast vinyl, windshield banners, rear window perf, and heavy-duty fleet graphics.' },
  { id: 'commercial-sign', label: 'Commercial Signage', description: 'Storefront window branding, frosted privacy film, ACM panels, and street-level directional signs.' },
  { id: 'apparel-htv', label: 'Apparel & Merch', description: 'Multilayer heat-transfer vinyl, foil finishes, heavy-gauge streetwear, and band merchandise.' },
  { id: 'paintings', label: 'Original Paintings', description: 'Custom mixed media, airbrush gradients, spray splatter on skate decks and distressed hardwood.' },
  { id: 'fine-art', label: 'Fine Art & Ink Drawings', description: 'Archival India ink drawings, precision stipple work, and hand-rendered technical line art.' },
  { id: 'tattoo-flash', label: 'Tattoo Flash & Concepts', description: 'Dark neo-traditional sheets, heavy blackwork linework, and bespoke custom body art concepts.' },
  { id: 'web-digital', label: 'Digital & Web Builds', description: 'High-impact brutalist digital experiences, SVG motion systems, and custom brand identity assets.' },
  { id: 'fabrication-3d', label: '3D Fabrication Lab', description: 'Functional prototypes, engineering polymers, brass insert housings, and bespoke multi-part assemblies.' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Car & Fleet Vinyl
  {
    id: 'car-01',
    title: 'Void Runner GT — Livery & Sunstrip',
    category: 'car-vinyl',
    categoryLabel: 'Car & Fleet Vinyl',
    subtitle: 'Dual-Layer Cast Vinyl Windshield & Quarter Panel Graphics',
    description: 'Bespoke automotive graphics package plotted from custom vector contours. Features high-tack air-release cast vinyl rated for 8+ years outdoor exposure, high-speed aerodynamic shear, and zero UV fade.',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Automotive', 'Cast Vinyl', 'Oracal 951', 'Matte + Holographic', 'Track Ready'],
    specs: {
      material: 'Oracal 951 Premium Cast (50 Micron) + Avery Holographic Accent',
      toleranceOrMedium: '±0.2mm optical alignment contour cut',
      turnaround: '3–5 Business Days',
      dimensionsOrScale: '58" x 9.5" Sunstrip + 72" Fender Accents',
      finishType: 'Ultra-Matte Black on Prism Holographic',
      machineOrTool: '54" Roland CAMM-1 Pro with optical registration'
    },
    featured: true
  },
  {
    id: 'car-02',
    title: 'Apex Tactical Fleet Commercial Markings',
    category: 'car-vinyl',
    categoryLabel: 'Car & Fleet Vinyl',
    subtitle: 'Heavy-Duty Reflective Fleet Lettering & Hazard Striping',
    description: 'Complete commercial service truck identity package. High-visibility retro-reflective prismatic vinyl calibrated to meet federal roadway safety specs with custom stylized geometric branding.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
    tags: ['Commercial Fleet', 'Reflective Vinyl', 'High-Tack', 'Weatherproof'],
    specs: {
      material: '3M Diamond Grade High-Reflective + 3M 1080 Cast',
      toleranceOrMedium: 'Contour plotted with transfer weed border',
      turnaround: '4 Business Days',
      dimensionsOrScale: 'Full tailgate + side door typography panels',
      finishType: 'Retro-Reflective Neon Yellow & Gloss Onyx',
      machineOrTool: 'Graphtec FC9000-140'
    }
  },
  {
    id: 'car-03',
    title: 'Drift Spec Tailgate & Cyber Lettering',
    category: 'car-vinyl',
    categoryLabel: 'Car & Fleet Vinyl',
    subtitle: 'Chrome Silver & Acid Lime Die-Cut Stacking',
    description: 'Layered street-style decal set built for grassroots drift team. Oil-slick chrome backing with acid lime precision lettering engineered to resist rubber debris and pressure washers.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    tags: ['Drift Style', 'Die-Cut', 'Layered Vinyl', 'Chrome Film'],
    specs: {
      material: 'TeckWrap Chrome Silver + Hexis Acid Green High-Gloss',
      toleranceOrMedium: 'Hand-weeded micro-kerning vector cuts',
      turnaround: '2 Business Days',
      dimensionsOrScale: '34" x 14" Rear Window Cluster',
      finishType: 'Mirror Chrome & High Gloss Toxic Lime',
      machineOrTool: 'Roland 30" Desktop Plotter'
    }
  },

  // 2. Commercial Signage & Storefronts
  {
    id: 'sign-01',
    title: 'Iron & Oak Barber Storefront Lettering',
    category: 'commercial-sign',
    categoryLabel: 'Commercial Signage',
    subtitle: 'Matte Charcoal & Gold Leaf Vinyl Glazing',
    description: 'Hand-installed custom storefront entrance door and picture windows. High-durability exterior window film with reverse-cut glass application and micro-textured brushed metallic accents.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Storefront', 'Window Vinyl', 'Reverse Cut', 'Commercial Grade'],
    specs: {
      material: 'Oracal 651 Intermediate Calendered & R-Tape Transfer',
      toleranceOrMedium: 'Reverse glass wet-method installation',
      turnaround: '3–5 Days',
      dimensionsOrScale: '84" x 48" Double Glazed Entrance',
      finishType: 'Brushed Gold & Solid Black Silk',
      machineOrTool: 'Graphtec Pro 54"'
    },
    featured: true
  },
  {
    id: 'sign-02',
    title: 'Kurogane Forge Heavy A-Frame Sign',
    category: 'commercial-sign',
    categoryLabel: 'Commercial Signage',
    subtitle: 'Laser Cut Steel Frame with Weatherproof Overlays',
    description: 'Industrial pavement sign fabricated with 1/8" aluminum composite backing, matte vinyl iconography, and high-impact stenciled brand motto for high-wind street presence.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    tags: ['A-Frame', 'ACM Panel', 'Outdoor Rated', 'Stenciled'],
    specs: {
      material: '3mm Dibond Aluminum Composite + UV Laminate Cast Vinyl',
      toleranceOrMedium: 'Substrate router-cut with hand-rolled laminate',
      turnaround: '5 Business Days',
      dimensionsOrScale: '24" x 36" Double-Sided Pavement Board',
      finishType: 'Industrial Matte Sandstone Black',
      machineOrTool: 'CNC Router + Vinyl Lamination Station'
    }
  },

  // 3. Custom Apparel & Merch
  {
    id: 'apparel-01',
    title: 'Hellhound Overdrive Heavyweight Merch',
    category: 'apparel-htv',
    categoryLabel: 'Apparel & Merch',
    subtitle: 'Puff HTV & Distressed Metallic Heat Transfer on 400GSM Fleece',
    description: 'Custom short-run band merchandise created without cheap automated dropshipping. Multi-zone heat transfer with dimensional puff foam ink and cracked silver foil elements.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    tags: ['Streetwear', 'Puff HTV', 'Band Merch', '400GSM Cotton'],
    specs: {
      material: 'Siser 3D Techno Puff Vinyl + Metallic Flake Polyurethane',
      toleranceOrMedium: '160°C pneumatic press at 60 PSI, cold peel',
      turnaround: '3 Business Days',
      dimensionsOrScale: '14" x 18" Full Back Graphic + Chest Crest',
      finishType: 'Raised 3D Foam Texture & Metallic Silver Sheen',
      machineOrTool: 'Stahls Hotronix Fusion Pneumatic 16x20'
    },
    featured: true
  },
  {
    id: 'apparel-02',
    title: 'Cyberpunk Ronin Tactical Workshirt',
    category: 'apparel-htv',
    categoryLabel: 'Apparel & Merch',
    subtitle: 'Iridescent Laser Vinyl on Ripstop Poly-Cotton',
    description: 'Bespoke tactical shop uniform featuring color-shifting chameleon vinyl that shifts from magenta to acid green under overhead studio lighting. Extreme wash cycle tested.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Chameleon Vinyl', 'Tactical Wear', 'Custom Uniform', 'High Durability'],
    specs: {
      material: 'Prismatic Polyurethane Thermal Transfer Foil',
      toleranceOrMedium: 'Vector weeded 0.5mm linework',
      turnaround: '2 Business Days',
      dimensionsOrScale: 'Dual Sleeve Emblems + Chest Pocket Monogram',
      finishType: 'Iridescent Dichroic Color-Shift',
      machineOrTool: 'Roland CAMM-1 + Hotronix Press'
    }
  },

  // 4. Custom Original Paintings
  {
    id: 'paint-01',
    title: 'Neon Ronin & The Ghost Circuit',
    category: 'paintings',
    categoryLabel: 'Original Paintings',
    subtitle: 'Airbrush, Acrylic Splatter, and Enamel on 7-Ply Maple Skateboard',
    description: 'One-of-a-kind original skate deck art piece. Hand-cut stencil layering combined with fine-line Iwata airbrush gradients, heavy ink outlines, and sealed under automotive 2K polyurethane clear coat.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    tags: ['Original Art', 'Skate Deck', 'Airbrush', 'Acrylic', '2K Clear'],
    specs: {
      material: 'Hard Rock Canadian Maple + Golden Acrylics + One-Shot Enamel',
      toleranceOrMedium: 'Hand painted freehand & multi-stage stencil mask',
      turnaround: '1 of 1 Physical Original',
      dimensionsOrScale: '8.25" x 32" Skate Deck',
      finishType: 'High-Gloss Automotive 2K Urethane Clear Coat',
      machineOrTool: 'Iwata Eclipse HP-CS Airbrush + Custom Mylar Cutters'
    },
    featured: true
  },
  {
    id: 'paint-02',
    title: 'Wasteland Relic #04',
    category: 'paintings',
    categoryLabel: 'Original Paintings',
    subtitle: 'Distressed Industrial Mixed Media on Reclaimed Barnwood',
    description: 'Gritty post-apocalyptic wall installation blending aerosol stencil marks, heavy black acrylic wash, raw iron rust oxidation, and riveted zinc plate embellishments.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mixed Media', 'Wood Panel', 'Rust Patina', 'Distressed Art'],
    specs: {
      material: '100-Year Reclaimed Douglas Fir + Iron Oxidizing Paint + Ink',
      toleranceOrMedium: 'Chemical patina reaction and hand-chiseled borders',
      turnaround: 'Bespoke Commission Available',
      dimensionsOrScale: '36" x 24" Heavy Wood Relief',
      finishType: 'Matte Raw Wax & Satin Seal',
      machineOrTool: 'Hand Craft + Spray Rig'
    }
  },

  // 5. Fine Art & Ink Drawings
  {
    id: 'fine-01',
    title: 'The Great Ouroboros Circuit',
    category: 'fine-art',
    categoryLabel: 'Fine Art & Ink Drawings',
    subtitle: 'Archival India Ink Stipple & Dip Pen on 300GSM Bristol Board',
    description: 'Hyper-detailed technical ink illustration depicting a biomechanical serpent fused with vacuum tube and PCB routing. Over 80 hours of hand stippling with 005 Sakura Pigma and vintage Speedball crowquill nibs.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    tags: ['Stipple Art', 'India Ink', 'Fine Art', 'Archival', 'Bristol Board'],
    specs: {
      material: 'Strathmore 500 Series 100% Cotton Bristol + Carbon Black Ink',
      toleranceOrMedium: 'Hand-drawn pointillism with 0.15mm micro-nibs',
      turnaround: 'Limited Edition Vector-Screened Prints & Original Available',
      dimensionsOrScale: '18" x 24" Framed Original',
      finishType: 'Uncoated Archival Ultra-White Cotton',
      machineOrTool: 'Speedball Crowquill + Sakura Micron 003'
    },
    featured: true
  },
  {
    id: 'fine-02',
    title: 'Cyber-Anatomy Skull Cross-Section',
    category: 'fine-art',
    categoryLabel: 'Fine Art & Ink Drawings',
    subtitle: 'Crosshatch Ink Rendering with Silver Foil Accent',
    description: 'Anatomical study fusing medical osteology with industrial servo linkages. High contrast hatching with pure black ink and hand-pressed Dutch leaf silver accents.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Anatomy', 'Crosshatch', 'Foil Accent', 'Hand Drawn'],
    specs: {
      material: 'Heavy Vellum Board + Higgins Waterproof Black + Silver Leaf',
      toleranceOrMedium: 'Manual crosshatching with metallic mordant gilding',
      turnaround: '2 Weeks for Custom Commissions',
      dimensionsOrScale: '12" x 16" Matted',
      finishType: 'Matte Ink with High-Reflectance Silver Foil',
      machineOrTool: 'Hand Craft Artistry'
    }
  },

  // 6. Tattoo Flash & Concepts
  {
    id: 'tattoo-01',
    title: 'Iron Fangs Flash Sheet #07',
    category: 'tattoo-flash',
    categoryLabel: 'Tattoo Flash & Concepts',
    subtitle: 'Dark Neo-Traditional Spit-Shaded Watercolor & Liquid Acrylic',
    description: 'Classic custom flash sheet featuring snarling wolf heads, broken daggers, cybernetic serpents, and occult symbols. Engineered with clean lines optimized for needle grouping and zero line bleed.',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80',
    tags: ['Tattoo Flash', 'Neo-Traditional', 'Spit-Shading', 'Liquid Acrylic'],
    specs: {
      material: 'Arches 140lb Cold Press Watercolor Paper + FW Inks',
      toleranceOrMedium: 'Traditional spit-shading with coffee dye staining',
      turnaround: 'Custom Flash Commission 5–7 Days',
      dimensionsOrScale: '11" x 14" Flash Sheet',
      finishType: 'Aged Tea-Stained Matte Watercolor',
      machineOrTool: 'Kolinsky Red Sable Brushes & Speedball Nibs'
    },
    featured: true
  },
  {
    id: 'tattoo-02',
    title: 'Heavy Blackwork Sigil & Armor Sleeve Concept',
    category: 'tattoo-flash',
    categoryLabel: 'Tattoo Flash & Concepts',
    subtitle: 'Full Arm Composition with Flow Lines & Muscle Contours',
    description: 'Full anatomical tattoo blueprint with anatomical flow vectors mapped to bicep, forearm, and elbow flex points. Built with bold sacred geometry and stark negative space.',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=80',
    tags: ['Blackwork', 'Sleeve Blueprint', 'Sacred Geometry', 'Custom Flash'],
    specs: {
      material: 'High-Res 600DPI Stencil Blueprint + Vector Line Master',
      toleranceOrMedium: 'Calibrated for thermal stencil printers and transfer paper',
      turnaround: '1 Week for Full Sleeve Architecture',
      dimensionsOrScale: 'Scalable Full-Arm Layout Template',
      finishType: 'High-Contrast Solid Blackwork',
      machineOrTool: 'Vector CAD + Hand Stencil Prep'
    }
  },

  // 7. Digital & Web Experiences
  {
    id: 'web-01',
    title: 'Valkyrie Soundworks Cyber Portal',
    category: 'web-digital',
    categoryLabel: 'Digital & Web Builds',
    subtitle: 'Brutalist Fast Web Engine with Audio Visualizer Integration',
    description: 'Custom client portfolio developed for an underground synthesizer boutique. Built with zero runtime bloat, razor-sharp CSS keyframe animations, audio synthesis, and dark cyber aesthetic.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Design', 'Audio API', 'Brutalist UI', 'Zero Bloat'],
    specs: {
      material: 'Pure React + Tailwind CSS + Web Audio API',
      toleranceOrMedium: '100% Lighthouse Performance Score, Mobile Responsive',
      turnaround: '7–10 Days Deployment',
      dimensionsOrScale: 'Full Responsive Web Stack',
      finishType: 'Ultra-Dark OLED Canvas with Neon Cyan Glyphs',
      machineOrTool: 'VS Code + Figma Vector Architecture'
    },
    featured: true
  },
  {
    id: 'web-02',
    title: 'Outlaw Machining Digital Brand Vault',
    category: 'web-digital',
    categoryLabel: 'Digital & Web Builds',
    subtitle: 'Interactive CNC Spec Calculator & Commercial Catalog',
    description: 'Custom web portal enabling precision machine shop clients to calculate custom turnings, upload DXF/STEP files, and generate automated purchase tickets in seconds.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Application', 'Client Tool', 'Interactive Calc', 'B2B Portal'],
    specs: {
      material: 'TypeScript + LocalStorage State + SVG Node Rendering',
      toleranceOrMedium: 'Zero backend overhead, 100% static hosting on GitHub',
      turnaround: '2 Weeks Custom Build',
      dimensionsOrScale: 'Full-Stack Static Application',
      finishType: 'Industrial Slate Grey & Hazard Warning Palette',
      machineOrTool: 'Modern Frontend Architecture'
    }
  },

  // 8. 3D Printing & Physical Fabrication Lab
  {
    id: 'fab-01',
    title: 'Motorsport Aux Switchgear & Gauge Pod',
    category: 'fabrication-3d',
    categoryLabel: '3D Fabrication Lab',
    subtitle: 'High-Temp Carbon Fiber Polycarbonate with Brass Threaded Inserts',
    description: 'Custom automotive dash pod engineered to house dual 52mm telemetry gauges and military-spec toggle switches. Designed in CAD with 0.12mm layer lines and heat-staked brass inserts.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['3D Printing', 'Carbon Fiber PCTG', 'Automotive', 'Brass Inserts', 'Klipper'],
    specs: {
      material: 'Prusament PC-CF (Carbon Fiber Polycarbonate) — 114°C HDT',
      toleranceOrMedium: '±0.08mm dimensional accuracy, 4 perimeters',
      turnaround: '2–3 Business Days',
      dimensionsOrScale: '180mm x 95mm x 65mm',
      finishType: 'Matte Vapor-Honed Carbon Textured Weave',
      machineOrTool: 'Voron 2.4 350mm with Volcano Hotend + Klipper Input Shaping'
    },
    featured: true
  },
  {
    id: 'fab-02',
    title: 'The Cyber-Gargoyle Multi-Material Totem',
    category: 'fabrication-3d',
    categoryLabel: '3D Fabrication Lab',
    subtitle: 'Dual-Color High-Detail Physical Desk Sculpture with Magnet Pockets',
    description: 'Intricate physical desk display featuring an aggressive mechanized gargoyle crest. Sliced with adaptive layer heights (0.08mm - 0.20mm) and engineered with hidden neodymium magnet cavity stops.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    tags: ['Additive Mfg', 'Multi-Material', 'Rare Earth Magnets', 'Custom Display'],
    specs: {
      material: 'Polymaker PolyTerra PLA + Sunlu Silk Copper filament',
      toleranceOrMedium: '0.08mm micro-stepping layer resolution',
      turnaround: '3 Days Printing & Hand Finishing',
      dimensionsOrScale: '220mm Tall x 140mm Wide',
      finishType: 'Two-Tone Silk Gunmetal & Burnished Copper',
      machineOrTool: 'Bambu Lab X1-Carbon with AMS Quad-Feed'
    },
    featured: true
  },
  {
    id: 'fab-03',
    title: 'Ruggedized Field Radio Enclosure with O-Ring Seal',
    category: 'fabrication-3d',
    categoryLabel: '3D Fabrication Lab',
    subtitle: 'PCTG Chassis with 95A Shore TPU Overmolded Bumper',
    description: 'Water-resistant, drop-tested handheld radio chassis built for outdoor search and tactical recreation. Engineered with co-printed TPU rubber shock dampers and stainless steel hex hardware.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    tags: ['PCTG', 'TPU Rubber', 'IP65 Ready', 'Functional Parts'],
    specs: {
      material: 'Fiberlogy PCTG Base + NinjaTek Cheetah 95A TPU Bumper',
      toleranceOrMedium: 'CNC-cut silicone seal groove, M3 helicoils',
      turnaround: '4 Days Rapid Prototyping',
      dimensionsOrScale: '145mm x 72mm x 38mm',
      finishType: 'Tactical Matte Olive Drab & Anodized Black Accents',
      machineOrTool: 'Custom CoreXY Klipper High-Flow Direct Drive'
    }
  }
];

export const WORKSHOP_SPECS = [
  {
    machine: '54" Roland CAMM-1 Pro Vinyl Plotter',
    capability: 'Continuous roll-feed optical contour cutting with micro-stepper precision.',
    specs: 'Downforce up to 500g, 0.025mm resolution, cast, calendered, reflective & sandblast resist.'
  },
  {
    machine: 'Klipper-Tuned High-Speed 3D Fabrication Array',
    capability: 'High-temperature enclosed CoreXY 3D printers with active chamber heating.',
    specs: 'Up to 350°C nozzle temps, PCTG, PC-CF, PA-CF (Nylon), TPU 90A, and aerospace polymers.'
  },
  {
    machine: 'Stahls 16x20 Pneumatic Auto-Release Heat Press',
    capability: 'Uniform digital temperature & pressure calibration for apparel thermal transfer.',
    specs: 'Precision pressure control up to 80 PSI, multi-zone heating, puff, metallic & flock HTV.'
  },
  {
    machine: 'Airbrush & Archival Wet Ink Studio',
    capability: 'Dual Iwata Custom Micron & Eclipse airbrushes with multi-stage chemical etching.',
    specs: 'Automotive 2K urethane clear coating, liquid acrylics, dip pens, and gold leaf gilding.'
  }
];
