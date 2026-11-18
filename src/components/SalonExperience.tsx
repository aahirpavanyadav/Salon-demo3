import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { SALON_SPACES, SalonSpace } from '../data/salonData';

export const SalonExperience: React.FC = () => {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);

  const nextSpace = () => {
    setActiveSpaceIndex((prev) => (prev + 1) % SALON_SPACES.length);
  };

  const prevSpace = () => {
    setActiveSpaceIndex((prev) => (prev - 1 + SALON_SPACES.length) % SALON_SPACES.length);
  };

  const currentSpace = SALON_SPACES[activeSpaceIndex];

  return (
    <section id="experience" className="py-24 md:py-36 bg-[#F7F3EB] relative border-t border-[#E8DFD2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Campaign Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C6A77B] block mb-3 font-medium">
              Chapter II • The Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#33251F] font-normal leading-[1.1]">
              AN ARCHITECTURE <br />
              <span className="italic text-[#C6A77B]">OF SERENITY</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A99A8B] font-mono">
              0{activeSpaceIndex + 1} / 0{SALON_SPACES.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSpace}
                className="w-10 h-10 border border-[#E8DFD2] flex items-center justify-center hover:bg-[#E8DFD2] text-[#33251F] transition-colors"
                aria-label="Previous space"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSpace}
                className="w-10 h-10 border border-[#E8DFD2] flex items-center justify-center hover:bg-[#E8DFD2] text-[#33251F] transition-colors"
                aria-label="Next space"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Photographic Stage */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] border border-[#E8DFD2] p-6 sm:p-10 shadow-atelier-elevated">
          {/* Main Space Photo (8 cols) */}
          <div className="lg:col-span-8 relative overflow-hidden aspect-[16/10] bg-[#E8DFD2]">
            <img
              key={currentSpace.id}
              src={currentSpace.image}
              alt={currentSpace.title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            {/* Number Tag */}
            <div className="absolute top-4 left-4 bg-[#33251F]/90 text-[#F7F3EB] px-3.5 py-1 text-xs font-mono tracking-widest uppercase">
              ZONE {currentSpace.number}
            </div>
          </div>

          {/* Space Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-4 lg:pl-4 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A77B] block mb-2 font-medium">
                {currentSpace.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#33251F] mb-4">
                {currentSpace.title}
              </h3>
              <div className="w-12 h-[1px] bg-[#E8DFD2] mb-6"></div>
              <p className="text-sm sm:text-base text-[#33251F]/80 font-light leading-relaxed mb-4">
                {currentSpace.description}
              </p>
              <div className="p-4 bg-[#F7F3EB] border border-[#E8DFD2] text-xs text-[#A99A8B] italic">
                "{currentSpace.details}"
              </div>
            </div>

            {/* Quick space selectors */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-[#E8DFD2]">
              {SALON_SPACES.map((space, idx) => (
                <button
                  key={space.id}
                  onClick={() => setActiveSpaceIndex(idx)}
                  className={`text-left p-2 border transition-all ${
                    activeSpaceIndex === idx
                      ? 'border-[#C6A77B] bg-[#F7F3EB]'
                      : 'border-transparent hover:border-[#E8DFD2]'
                  }`}
                >
                  <span className="text-[9px] uppercase font-mono block text-[#A99A8B]">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] text-[#33251F] truncate block font-medium">
                    {space.title.split(' ')[1] || space.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filmstrip Horizontal Preview Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {SALON_SPACES.map((space, idx) => (
            <div
              key={space.id}
              onClick={() => setActiveSpaceIndex(idx)}
              className={`group cursor-pointer border p-3 bg-[#FAF7F2] transition-all duration-300 ${
                activeSpaceIndex === idx
                  ? 'border-[#C6A77B] shadow-md ring-1 ring-[#C6A77B]/40'
                  : 'border-[#E8DFD2] opacity-75 hover:opacity-100'
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden mb-3 bg-[#E8DFD2]">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#A99A8B]">
                <span>SPACE 0{idx + 1}</span>
                <span className="text-[#33251F] font-medium">{space.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
