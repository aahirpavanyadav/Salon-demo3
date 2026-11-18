import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Clock, Check } from 'lucide-react';
import { SERVICES_COLLECTION, ServiceItem } from '../data/salonData';

interface ServicesProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesEditorial: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'skin' | 'bridal' | 'spa'>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_COLLECTION
    : SERVICES_COLLECTION.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 md:py-36 bg-[#FAF7F2] relative border-t border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E8DFD2] pb-8 mb-16">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C6A77B] block mb-3 font-medium">
              The Menu • Vol. 02
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#33251F] font-normal leading-[1.08]">
              THE EDITORIAL <br />
              <span className="italic text-[#C6A77B]">COLLECTION</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md text-sm text-[#A99A8B] leading-relaxed">
            Curated beauty rituals performed by master colourists, skin therapists and bridal artists. 
            Each service is tailored with bespoke organic elixirs and dedicated attention.
          </div>
        </div>

        {/* Editorial Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-16 pb-4 border-b border-[#E8DFD2]/60 overflow-x-auto text-xs uppercase tracking-[0.2em]">
          {[
            { id: 'all', label: 'Complete Collection' },
            { id: 'hair', label: 'Hair Couture & Color' },
            { id: 'skin', label: 'Skin Radiance & Facials' },
            { id: 'bridal', label: 'Haute Bridal Suite' },
            { id: 'spa', label: 'Hand & Foot Spa' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-1 relative transition-colors ${
                activeTab === tab.id
                  ? 'text-[#33251F] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C6A77B]'
                  : 'text-[#A99A8B] hover:text-[#33251F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Magazine Alternating Layout (Not ordinary cards) */}
        <div className="space-y-24 md:space-y-36">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Section (Alternating Left/Right) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative group overflow-hidden bg-[#E8DFD2] aspect-[4/3] sm:aspect-[16/11] shadow-atelier-elevated">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Editorial Plate Number */}
                    <div className="absolute top-4 left-4 bg-[#F7F3EB]/95 px-3 py-1 border border-[#E8DFD2] text-[10px] uppercase font-mono tracking-widest text-[#33251F]">
                      {service.number}
                    </div>

                    {/* Starting Price Tag */}
                    <div className="absolute bottom-4 right-4 bg-[#33251F]/90 text-[#F7F3EB] backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider font-medium">
                      <span>Starts from </span>
                      <span className="font-serif text-sm font-semibold text-[#C6A77B]">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Editorial Content */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3 text-[11px] uppercase tracking-[0.25em] text-[#C6A77B]">
                    <span>{service.number}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#33251F] font-normal leading-[1.15] mb-3">
                    {service.title}
                  </h3>

                  <p className="font-serif italic text-base sm:text-lg text-[#C6A77B] mb-5">
                    {service.subtitle}
                  </p>

                  <div className="w-12 h-[1px] bg-[#E8DFD2] mb-6"></div>

                  <p className="text-sm sm:text-base text-[#33251F]/80 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  {/* Feature bullet list with delicate checks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 py-4 border-y border-[#E8DFD2]/60">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-[#33251F]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A77B] mt-1.5 flex-shrink-0"></span>
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Editorial Note & Action Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[11px] uppercase tracking-wider text-[#A99A8B] max-w-xs">
                      {service.editorialNote}
                    </p>

                    <button
                      onClick={() => onSelectServiceForBooking(service)}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] font-medium px-6 py-3 bg-[#33251F] text-[#F7F3EB] hover:bg-[#C6A77B] transition-all duration-300 self-start sm:self-auto"
                    >
                      <span>Reserve Experience</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Consultation Strip */}
        <div className="mt-28 p-8 md:p-12 bg-[#E8DFD2]/40 border border-[#E8DFD2] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A77B] block mb-1 font-semibold">
              BESPOKE BEAUTY COMMISSIONS
            </span>
            <h4 className="font-serif text-2xl md:text-3xl text-[#33251F]">
              Have a distinct vision or bridal ensemble?
            </h4>
            <p className="text-xs md:text-sm text-[#A99A8B] mt-1">
              Speak directly with our senior artist on WhatsApp or in-salon for custom quote & trial mapping.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForBooking(SERVICES_COLLECTION[0])}
            className="px-8 py-3.5 bg-transparent border border-[#33251F] text-[#33251F] hover:bg-[#33251F] hover:text-[#F7F3EB] text-xs uppercase tracking-[0.25em] font-medium transition-colors whitespace-nowrap"
          >
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
