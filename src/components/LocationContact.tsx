import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, ArrowUpRight, ChevronDown, ChevronUp, Navigation, Instagram, Facebook } from 'lucide-react';
import { SALON_DATA, FAQS } from '../data/salonData';

interface LocationContactProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F7F3EB] relative border-t border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C6A77B] block mb-3 font-medium">
            Chapter V • Coordinates & Rendezvous
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#33251F] leading-[1.1] font-normal">
            VISIT THE <span className="italic text-[#C6A77B]">ATELIER</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C6A77B] mx-auto mt-6"></div>
        </div>

        {/* Clean Split Layout: Details & Visual Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-[#FAF7F2] border border-[#E8DFD2] p-8 sm:p-14 shadow-atelier-elevated">
          {/* Left Column: Contact & Hours Details (6 cols) */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A77B] font-semibold block mb-2">
                VERIFIED LOCATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#33251F] mb-3">
                Elegance Saloon • Gudimalkapur
              </h3>
              <p className="text-sm sm:text-base text-[#33251F]/80 leading-relaxed font-light">
                {SALON_DATA.address.street}, {SALON_DATA.address.colony}, {SALON_DATA.address.area}, {SALON_DATA.address.city}, {SALON_DATA.address.state} — {SALON_DATA.address.pincode}
              </p>
              <p className="text-xs text-[#A99A8B] mt-2 italic">
                Landmark: {SALON_DATA.address.landmark}
              </p>
            </div>

            {/* Opening Hours Table */}
            <div className="border-t border-[#E8DFD2] pt-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A77B] font-semibold block mb-4">
                OPENING HOURS
              </span>
              <div className="space-y-3">
                {SALON_DATA.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-[#E8DFD2]/60">
                    <span className="text-[#33251F] font-medium">{h.days}</span>
                    <span className="font-serif text-[#C6A77B] font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#A99A8B] mt-2">
                Walk-ins welcome based on stylist availability. Advance bookings recommended.
              </p>
            </div>

            {/* Communications Channel */}
            <div className="border-t border-[#E8DFD2] pt-6 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A77B] font-semibold block">
                DIRECT CONTACT
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${SALON_DATA.phone}`}
                  className="p-4 bg-[#F7F3EB] border border-[#E8DFD2] hover:border-[#33251F] transition-colors flex items-center space-x-3 text-xs"
                >
                  <Phone className="w-4 h-4 text-[#C6A77B]" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#A99A8B]">Telephone</span>
                    <span className="font-medium text-[#33251F]">{SALON_DATA.phoneDisplay}</span>
                  </div>
                </a>

                <button
                  onClick={onOpenWhatsApp}
                  className="p-4 bg-[#F7F3EB] border border-[#E8DFD2] hover:border-[#C6A77B] transition-colors flex items-center space-x-3 text-xs text-left"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#A99A8B]">WhatsApp Concierge</span>
                    <span className="font-medium text-[#33251F]">Instant Chat</span>
                  </div>
                </button>
              </div>

              {/* Social links */}
              <div className="pt-2 flex items-center space-x-6 text-xs text-[#33251F]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A77B] flex items-center space-x-1.5 transition-colors uppercase tracking-widest text-[11px]"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A77B] flex items-center space-x-1.5 transition-colors uppercase tracking-widest text-[11px]"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <a
                  href={SALON_DATA.googleSearchProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A77B] flex items-center space-x-1.5 transition-colors uppercase tracking-widest text-[11px]"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Google Profile</span>
                </a>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#33251F] text-[#F7F3EB] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C6A77B] transition-colors"
              >
                Schedule an Appointment
              </button>
              <a
                href={SALON_DATA.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-[#33251F] text-[#33251F] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#33251F] hover:text-[#F7F3EB] transition-colors text-center inline-flex items-center justify-center space-x-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Location & Interactive Map Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/12] overflow-hidden bg-[#E8DFD2] border border-[#E8DFD2] shadow-inner">
              {/* Simulated Elegant Google Maps View / Stylized Map preview */}
              <iframe
                title="Elegance Saloon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5028562725455!2d78.43697477583687!3d17.38786148349787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971686009173%3A0x6677a177253f608d!2sElegance%20salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[98%] saturate-[80%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Atelier Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 bg-[#33251F]/90 text-[#F7F3EB] backdrop-blur-md px-4 py-2 border border-[#C6A77B]/40 text-xs">
                <p className="font-serif text-sm font-medium text-[#C6A77B]">Elegance Saloon</p>
                <p className="text-[10px] text-[#F7F3EB]/80 font-mono">17.3878° N, 78.4395° E</p>
              </div>
            </div>

            {/* Quick Directions Summary Card */}
            <div className="p-6 bg-[#F7F3EB] border border-[#E8DFD2] text-xs space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#A99A8B] font-semibold">
                ARRIVING AT THE SALON
              </span>
              <p className="text-[#33251F] leading-relaxed">
                • <strong>From Mehdipatnam Rethi Bowli:</strong> Drive toward Gudimalkapur via Amba Theatre Road (approx. 5 minutes).
              </p>
              <p className="text-[#33251F] leading-relaxed">
                • <strong>From Asif Nagar / Murad Nagar:</strong> Follow Main Road toward Huda Colony.
              </p>
              <p className="text-[#A99A8B] italic">
                Complimentary parking assistance available for salon guests.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A77B] block mb-2 font-medium">
              Information & Inquiries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#33251F]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E8DFD2] bg-[#FAF7F2] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif text-[#33251F] hover:text-[#C6A77B] transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#C6A77B] flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#A99A8B] flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#33251F]/80 font-light leading-relaxed border-t border-[#E8DFD2]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
