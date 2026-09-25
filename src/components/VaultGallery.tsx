import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpRight, Cpu, Eye, Tag } from 'lucide-react';
import { CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import { GalleryCategory, GalleryItem } from '../types';
import { GalleryModal } from './GalleryModal';

interface VaultGalleryProps {
  onSelectBuildItem: (item: GalleryItem) => void;
}

export const VaultGallery: React.FC<VaultGalleryProps> = ({ onSelectBuildItem }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedItem, setInspectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.specs.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="vault" className="relative py-20 bg-[#08080C] border-b border-[#222538]">
      {/* Halftone matrix overlay */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-8 bg-[#D946EF] inline-block" />
              <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#D946EF]">
                THE PORTFOLIO VAULT // 8 PILLARS OF CRAFT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-wider text-white">
              VERIFIED FABRICATION ARCHIVE
            </h2>
            <p className="text-gray-400 font-mono-code text-xs sm:text-sm mt-1 max-w-2xl">
              Every specimen is custom-cut, plotted, pressed, painted, or 3D-sintered. 
              Zero automated print-on-demand junk. 100% physical artisanal precision.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search materials, tags, vinyl..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#121420] border border-[#2B304A] focus:border-[#00F0FF] focus:outline-none text-xs font-mono-code text-gray-200 placeholder-gray-500 rounded-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono-code text-gray-500 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* 8-Pillar Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === 'all'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono-code font-bold uppercase whitespace-nowrap transition-all duration-200 cursor-pointer rounded-xs border ${
                  isActive
                    ? 'bg-[#D946EF] text-white border-[#D946EF] shadow-[0_0_15px_rgba(217,70,239,0.5)]'
                    : 'bg-[#10121C] text-gray-300 border-[#222538] hover:border-gray-600 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-xs ${
                    isActive ? 'bg-black/30 text-white' : 'bg-[#191D2E] text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        {activeCategoryObj && (
          <div className="mb-8 p-3 bg-[#0F111D] border-l-2 border-[#00F0FF] text-xs font-mono-code text-gray-300 flex items-center justify-between">
            <span>
              <strong className="text-white uppercase mr-2">{activeCategoryObj.label}:</strong>
              {activeCategoryObj.description}
            </span>
            <span className="text-[#00F0FF] text-[10px] uppercase hidden sm:inline">
              Showing {filteredItems.length} Specimens
            </span>
          </div>
        )}

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-[#0D0E16] border border-[#222538] rounded-xs">
            <Cpu className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <p className="font-mono-code text-sm text-gray-400">
              NO ARTIFACTS MATCHING CRITERIA: &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#1A1D2E] text-[#00F0FF] font-mono-code text-xs font-bold uppercase rounded-xs border border-[#00F0FF]/30 hover:border-[#00F0FF]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#0E101A] border border-[#222538] hover:border-[#D946EF]/80 transition-all duration-300 rounded-xs flex flex-col justify-between overflow-hidden hover:shadow-[0_0_25px_rgba(217,70,239,0.2)]"
              >
                {/* Image Visualizer */}
                <div className="relative aspect-16/10 w-full bg-[#08080C] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E101A] via-transparent to-transparent opacity-80" />

                  {/* Category Chip */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 text-[9px] font-mono-code font-bold uppercase bg-black/80 text-[#00F0FF] border border-[#00F0FF]/40 rounded-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Inspect Button Trigger */}
                  <button
                    onClick={() => setInspectedItem(item)}
                    className="absolute top-3 right-3 p-1.5 bg-black/80 text-gray-300 hover:text-white border border-gray-700 hover:border-[#D946EF] rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    title="Quick Spec Inspection"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display uppercase tracking-wide text-white group-hover:text-[#00F0FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono-code text-gray-400 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-gray-300 mt-3 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro Specs Bar */}
                  <div className="mt-5 pt-3 border-t border-[#1C2030] space-y-2 text-[11px] font-mono-code">
                    <div className="flex justify-between items-center text-gray-400">
                      <span className="text-[10px] uppercase text-gray-500">MATERIAL</span>
                      <span className="text-gray-300 truncate max-w-[180px]">{item.specs.material}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-400">
                      <span className="text-[10px] uppercase text-gray-500">TURNAROUND</span>
                      <span className="text-[#39FF14]">{item.specs.turnaround}</span>
                    </div>

                    {/* Action Row */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setInspectedItem(item)}
                        className="flex-1 py-2 px-3 bg-[#151826] hover:bg-[#1E2235] text-gray-200 hover:text-[#00F0FF] border border-[#2B304A] hover:border-[#00F0FF]/50 text-xs font-mono-code font-bold uppercase transition-all rounded-xs cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Specs</span>
                      </button>

                      <button
                        onClick={() => {
                          onSelectBuildItem(item);
                        }}
                        className="p-2 bg-[#D946EF]/20 hover:bg-[#D946EF] text-[#D946EF] hover:text-white border border-[#D946EF]/50 rounded-xs transition-colors cursor-pointer"
                        title="Commission this build style"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Specification Modal */}
      {inspectedItem && (
        <GalleryModal
          item={inspectedItem}
          onClose={() => setInspectedItem(null)}
          onRequestSimilar={(item) => {
            setInspectedItem(null);
            onSelectBuildItem(item);
          }}
        />
      )}
    </section>
  );
};
