import React from 'react';
import { ArrowUp, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] text-[#33251F] border-t border-[#E8DFD2] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8DFD2]">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl md:text-4xl tracking-[0.16em] uppercase block font-medium">
              ELEGANCE SALOON
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A99A8B] block -mt-2">
              L'Atelier de Beauté • Hyderabad
            </span>
            <p className="text-sm text-[#33251F]/70 max-w-sm font-light leading-relaxed pt-2">
              A bespoke beauty atelier in Gudimalkapur, dedicated to unhurried hair couture, 
              dermatological skin wellness, and timeless bridal artistry.
            </p>
            <div className="pt-2 text-xs font-mono text-[#C6A77B]">
              COORDINATES: {SALON_DATA.address.coordinates}
            </div>
          </div>

          {/* Table of Contents (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A77B] font-semibold block mb-4">
              EDITORIAL SITEMAP
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#33251F]/80">
              <li>
                <a href="#hero" className="hover:text-[#C6A77B] transition-colors">
                  01. The Opening Masthead
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C6A77B] transition-colors">
                  02. Our Story & Manifesto
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6A77B] transition-colors">
                  03. The Services Collection
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C6A77B] transition-colors">
                  04. The Photographic Spaces
                </a>
              </li>
              <li>
                <a href="#moments" className="hover:text-[#C6A77B] transition-colors">
                  05. Signature Transformations
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A77B] transition-colors">
                  06. The Beauty Journal
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C6A77B] transition-colors">
                  07. Location & Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Coordinates & Hours (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A77B] font-semibold block mb-4">
              SALON INFORMATION
            </span>
            <div className="space-y-2 text-xs text-[#33251F]/80">
              <p className="font-medium text-[#33251F]">
                {SALON_DATA.address.street}
              </p>
              <p>{SALON_DATA.address.colony}, {SALON_DATA.address.area}</p>
              <p>{SALON_DATA.address.city}, {SALON_DATA.address.state} — {SALON_DATA.address.pincode}</p>
              <p className="pt-2 text-[#A99A8B]">
                Telephone: <span className="text-[#33251F] font-medium">{SALON_DATA.phoneDisplay}</span>
              </p>
              <p className="text-[#A99A8B]">
                Open Daily: <span className="text-[#33251F] font-medium">10:00 AM – 8:30 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A99A8B] gap-4">
          <p>© 2026 Elegance Saloon Hyderabad. All rights reserved. Concept II — Warm Editorial Luxury.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-[#33251F] hover:text-[#C6A77B] transition-colors uppercase tracking-widest text-[10px]"
          >
            <span>Back to Masthead</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
