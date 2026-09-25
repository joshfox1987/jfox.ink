import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VaultGallery } from './components/VaultGallery';
import { CapabilitiesMatrix } from './components/CapabilitiesMatrix';
import { Lab3DPrototyping } from './components/Lab3DPrototyping';
import { AboutJosh } from './components/AboutJosh';
import { SpecBuilder } from './components/SpecBuilder';
import { DirectContact } from './components/DirectContact';
import { Footer } from './components/Footer';
import { GalleryItem, MediumType } from './types';

export default function App() {
  const [selectedMedium, setSelectedMedium] = useState<MediumType | undefined>(undefined);
  const [injectedNotes, setInjectedNotes] = useState<string | undefined>(undefined);

  const scrollToSpecBuilder = () => {
    const el = document.getElementById('spec-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVault = () => {
    const el = document.getElementById('vault');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBuildItem = (item: GalleryItem) => {
    setSelectedMedium(item.category as MediumType);
    setInjectedNotes(
      `Reference Build: ${item.title} (${item.categoryLabel})\nRequested Material Profile: ${item.specs.material}\nStandard Specs: ${item.specs.toleranceOrMedium}`
    );
    scrollToSpecBuilder();
  };

  const handlePreload3DSpec = (specDetails: string) => {
    setSelectedMedium('fabrication-3d');
    setInjectedNotes(specDetails);
    scrollToSpecBuilder();
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-[#E2E8F0] selection:bg-[#D946EF] selection:text-white flex flex-col font-sans">
      {/* Persistent Global Header with Metal Amp Synth */}
      <Header onOpenSpecBuilder={scrollToSpecBuilder} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenSpecBuilder={scrollToSpecBuilder}
          onExploreVault={scrollToVault}
        />

        {/* 8-Pillar Portfolio Vault */}
        <VaultGallery onSelectBuildItem={handleSelectBuildItem} />

        {/* Capabilities Matrix & Pipeline */}
        <CapabilitiesMatrix />

        {/* 3D Printing & Physical Fabrication Lab */}
        <Lab3DPrototyping onPreload3DSpec={handlePreload3DSpec} />

        {/* About Josh & Craftsman Manifesto */}
        <AboutJosh />

        {/* The Ink Lab: Project Spec Builder & Estimator */}
        <SpecBuilder
          initialMedium={selectedMedium}
          initialNotes={injectedNotes}
        />

        {/* Direct Contact & Live Status */}
        <DirectContact />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
