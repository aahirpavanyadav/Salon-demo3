import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="hero" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-[#F7F3EB]">
      {/* Background delicate radial grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Magazine Masthead Sub-Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E8DFD2] pb-4 mb-10 md:mb-14 text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#A99A8B]">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-[#33251F]">ELEGANCE SALOON</span>
            <span className="text-[#C6A77B]">•</span>
            <span>GAZETTE EDITORIALE</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <span>ISSUE N° 02</span>
            <span>HYDERABAD ATELIER</span>
            <span className="text-[#33251F] font-mono">17.3878° N, 78.4395° E</span>
          </div>
          <div>
            <span className="text-[#C6A77B] font-medium">HAUTE BEAUTÉ</span>
          </div>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Manifesto (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-[1px] w-8 bg-[#C6A77B]"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C6A77B] font-medium">
                The Beauty Atelier
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#33251F] leading-[1.02] font-normal mb-8">
              THE ART OF <br />
              <span className="italic font-light text-[#C6A77B]">LOOKING</span> AND <br />
              FEELING <br />
              <span className="italic font-serif font-light">BEAUTIFUL.</span>
            </h1>

            <div className="w-16 h-[1px] bg-[#E8DFD2] mb-8"></div>

            <p className="text-base sm:text-lg md:text-xl text-[#33251F]/80 max-w-xl font-light leading-relaxed mb-10">
              Discover a space where beauty, confidence and personal expression come together. 
              An intimate Parisian-inspired sanctuary nestled in Gudimalkapur, crafted for personalized 
              hair couture, dewy cellular skin rituals, and bespoke bridal artistry.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <button
                onClick={onExploreServices}
                className="group relative inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 bg-[#33251F] text-[#F7F3EB] border border-[#33251F] hover:bg-[#C6A77B] hover:border-[#C6A77B] transition-all duration-300"
              >
                <span>Discover Our Services</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 bg-transparent text-[#33251F] border border-[#A99A8B]/60 hover:border-[#33251F] hover:bg-[#E8DFD2]/30 transition-all duration-300"
              >
                <span>Book Your Visit</span>
              </button>
            </div>

            {/* Subtle verification badge & rating */}
            <div className="mt-12 pt-8 border-t border-[#E8DFD2]/70 flex flex-wrap items-center gap-6 text-xs text-[#A99A8B]">
              <div className="flex items-center space-x-1.5">
                <span className="text-[#C6A77B] text-sm">★★★★★</span>
                <span className="font-semibold text-[#33251F]">4.9 / 5.0</span>
                <span>(Verified Google Reviews)</span>
              </div>
              <span className="hidden sm:inline text-[#E8DFD2]">•</span>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6A77B]" />
                <span>Opp. Anusha Hospital, Gudimalkapur</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Editorial Photography (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background tonal decorative offset block */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#C6A77B]/40 z-0 hidden sm:block"></div>
              
              {/* Main Image Frame with Reveal Animation */}
              <div className="relative z-10 overflow-hidden bg-[#E8DFD2] aspect-[3/4] shadow-atelier-elevated">
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85"
                  alt="Elegance Saloon Haute Coiffure Editorial"
                  className="w-full h-full object-cover object-center animate-curtain transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Editorial Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#33251F]/90 via-[#33251F]/40 to-transparent text-[#F7F3EB]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#C6A77B] mb-1">
                    PLATE N° 01 • AUTUMN / WINTER
                  </p>
                  <p className="font-serif text-xl font-light italic">
                    "Subtle French Balayage on Natural Espresso Texture"
                  </p>
                </div>

                {/* Floating Atelier Stamp */}
                <div className="absolute top-4 left-4 bg-[#F7F3EB]/95 backdrop-blur-sm px-3.5 py-1.5 border border-[#E8DFD2] shadow-sm">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-[#33251F]">
                    Haute Coiffure
                  </span>
                </div>
              </div>

              {/* Secondary Asymmetrical Mini-Polaroid Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 z-20 bg-[#F7F3EB] p-3 border border-[#E8DFD2] shadow-atelier-elevated w-48">
                <div className="aspect-[4/3] overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                    alt="Artisan Styling Station"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#A99A8B]">
                  Gudimalkapur Studio
                </p>
                <p className="font-serif text-xs text-[#33251F] italic">
                  Unhurried Consultations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex items-center justify-between border-t border-[#E8DFD2] pt-6 text-[10px] tracking-[0.3em] uppercase text-[#A99A8B]">
          <span>SCROLL TO EXPLORE THE ATELIER</span>
          <a
            href="#story"
            className="group flex items-center space-x-2 text-[#33251F] hover:text-[#C6A77B] transition-colors"
          >
            <span>DISCOVER STORY</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
