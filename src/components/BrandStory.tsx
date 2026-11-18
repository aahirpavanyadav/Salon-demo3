import React from 'react';
import { ArrowUpRight, Sparkles, HeartHandshake, ShieldCheck, Compass } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-36 bg-[#F7F3EB] relative border-t border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C6A77B] block mb-3 font-medium">
            Chapter I • The Atelier Manifesto
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#33251F] leading-[1.1] font-normal">
            BEAUTY IS AN ART. <br />
            <span className="italic text-[#C6A77B]">MAKE IT YOURS.</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C6A77B] mx-auto mt-6"></div>
        </div>

        {/* Asymmetrical Magazine Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Stacked Offset Photographs (5 cols) */}
          <div className="lg:col-span-5 space-y-8 relative">
            <div className="relative">
              <div className="overflow-hidden aspect-[4/5] bg-[#E8DFD2] shadow-atelier-elevated">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                  alt="Elegance Saloon Interior Atelier"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#33251F] text-[#F7F3EB] p-4 text-xs font-mono tracking-widest uppercase">
                FIG. 01 — THE SANCTUARY
              </div>
            </div>

            {/* Inset Secondary Quote Card */}
            <div className="p-8 bg-[#E8DFD2]/50 border border-[#E8DFD2] relative">
              <span className="font-serif text-5xl text-[#C6A77B]/40 leading-none absolute top-3 left-4">
                “
              </span>
              <p className="font-serif text-lg md:text-xl italic text-[#33251F] leading-relaxed relative z-10 pt-2">
                "We don't impose cookie-cutter trends. We listen to the rhythm of your life, study your hair texture and skin vitality, and craft looks that feel organically yours."
              </p>
              <div className="mt-4 pt-4 border-t border-[#A99A8B]/30 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#A99A8B]">
                <span>Elegance Master Atelier</span>
                <span>Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Real Salon Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2">
            <div className="space-y-6 text-base sm:text-lg text-[#33251F]/85 font-light leading-relaxed">
              <p className="first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:text-[#C6A77B] first-letter:leading-none">
                {SALON_DATA.philosophy.paragraph1}
              </p>
              <p>
                {SALON_DATA.philosophy.paragraph2}
              </p>
              <p className="text-sm md:text-base text-[#A99A8B] leading-relaxed">
                Located on Amba Theatre Road, right opposite Anusha Hospital in Gudimalkapur, 
                our atelier welcomes women and men seeking thoughtful precision — from balayage 
                colour transitions that catch the light like silk to Ayurvedic scalp washes in our 
                dimly-lit quiet chamber.
              </p>
            </div>

            {/* Atelier Pillars (3 Column Minimalist Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 pt-8 border-t border-[#E8DFD2]">
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A77B] font-semibold">
                  01 / CRAFTSMANSHIP
                </span>
                <h4 className="font-serif text-xl text-[#33251F]">Precision Artistry</h4>
                <p className="text-xs text-[#A99A8B] leading-relaxed">
                  Every stroke, scissor cut, and facial stroke is executed with trained botanical care.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A77B] font-semibold">
                  02 / HYGIENE
                </span>
                <h4 className="font-serif text-xl text-[#33251F]">Hospital Disinfection</h4>
                <p className="text-xs text-[#A99A8B] leading-relaxed">
                  Medical autoclaving, sealed single-use linens, and zero compromise on clean health.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A77B] font-semibold">
                  03 / SANCTUARY
                </span>
                <h4 className="font-serif text-xl text-[#33251F]">Unhurried Luxury</h4>
                <p className="text-xs text-[#A99A8B] leading-relaxed">
                  Private bridal suites and calm acoustic lounges without the chaos of crowded salons.
                </p>
              </div>
            </div>

            {/* Atelier Verification Strip */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E8DFD2] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#A99A8B] block">
                  VERIFIED ADDRESS
                </span>
                <p className="text-xs text-[#33251F] font-medium mt-0.5">
                  {SALON_DATA.address.street}, {SALON_DATA.address.colony}, {SALON_DATA.address.city} - {SALON_DATA.address.pincode}
                </p>
              </div>
              <a
                href={SALON_DATA.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs uppercase tracking-[0.2em] font-medium text-[#C6A77B] hover:text-[#33251F] transition-colors"
              >
                <span>View On Map</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
