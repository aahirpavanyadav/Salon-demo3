import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';

export const BeautyJournalGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hair' | 'skin' | 'bridal' | 'atelier'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#F7F3EB] relative border-t border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Gallery Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E8DFD2] pb-8 mb-16">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C6A77B] block mb-3 font-medium">
              The Visual Archive • Issue 02
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#33251F] font-normal leading-[1.08]">
              THE BEAUTY <br />
              <span className="italic text-[#C6A77B]">JOURNAL</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-sm text-sm text-[#A99A8B] leading-relaxed">
            A visual chronicle of bespoke creations, serene salon vignettes, and authentic work 
            sculpted within our Hyderabad atelier.
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-12 text-xs uppercase tracking-[0.2em]">
          {[
            { id: 'all', label: 'All Plates' },
            { id: 'hair', label: 'Hair Architecture' },
            { id: 'skin', label: 'Skin & Glow' },
            { id: 'bridal', label: 'Haute Bridal' },
            { id: 'atelier', label: 'Atelier Spaces' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`py-2 px-1 relative transition-colors ${
                filter === tab.id
                  ? 'text-[#33251F] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C6A77B]'
                  : 'text-[#A99A8B] hover:text-[#33251F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer bg-[#FAF7F2] border border-[#E8DFD2] p-4 shadow-atelier-subtle hover:shadow-atelier-elevated transition-all duration-500 relative flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="overflow-hidden aspect-[3/4] bg-[#E8DFD2] relative mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#33251F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 bg-[#F7F3EB]/90 backdrop-blur-sm rounded-full text-[#33251F] shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#F7F3EB]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest text-[#33251F]">
                    PLATE {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                {/* Editorial Caption */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C6A77B] mb-1">
                    <span>{item.category.toUpperCase()}</span>
                    <span>{item.credits}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#33251F] group-hover:text-[#C6A77B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A99A8B] font-light mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Magazine Lightbox */}
      {lightboxIndex !== null && activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#33251F]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#F7F3EB] border border-[#C6A77B]/40 shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 p-2 text-[#33251F] hover:text-[#C6A77B] border border-[#E8DFD2] rounded-full transition-colors z-20"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0))
              }
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#33251F]/20 items-center justify-center hover:bg-[#33251F] hover:text-[#F7F3EB] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0))
              }
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#33251F]/20 items-center justify-center hover:bg-[#33251F] hover:text-[#F7F3EB] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Image Stage */}
            <div className="w-full md:w-3/5 aspect-[3/4] overflow-hidden bg-[#E8DFD2] shadow-inner">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lightbox Editorial Notes */}
            <div className="w-full md:w-2/5 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A77B] font-semibold">
                PLATE {lightboxIndex + 1} OF {filteredItems.length}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#33251F]">
                {activeLightboxItem.title}
              </h3>
              <div className="w-12 h-[1px] bg-[#E8DFD2]"></div>
              <p className="text-sm text-[#33251F]/80 leading-relaxed font-light">
                {activeLightboxItem.caption}
              </p>
              <div className="pt-4 border-t border-[#E8DFD2] text-xs text-[#A99A8B]">
                <p>Curated by {activeLightboxItem.credits}</p>
                <p className="mt-1">Elegance Saloon • Gudimalkapur, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
