import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLIENT_TESTIMONIALS, Testimonial } from '../data/salonData';

export const ClientTestimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const current = CLIENT_TESTIMONIALS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CLIENT_TESTIMONIALS.length) % CLIENT_TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#FAF7F2] relative border-t border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C6A77B] block mb-3 font-medium">
            Chapter IV • Words of Appreciation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#33251F] leading-[1.1] font-normal">
            CLIENT <span className="italic text-[#C6A77B]">LOVE</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-4 text-xs tracking-widest uppercase text-[#A99A8B]">
            <span className="text-[#C6A77B]">★★★★★</span>
            <span className="font-semibold text-[#33251F]">4.9 Overall Rating</span>
            <span>• Google Business Profile Verified</span>
          </div>
          <div className="w-12 h-[1px] bg-[#C6A77B] mx-auto mt-6"></div>
        </div>

        {/* Magazine Pull-Quote Centerpiece */}
        <div className="max-w-4xl mx-auto bg-[#F7F3EB] border border-[#E8DFD2] p-8 sm:p-16 shadow-atelier-elevated relative">
          <Quote className="w-12 h-12 text-[#C6A77B]/30 absolute top-8 left-8 -z-0" />

          <div className="relative z-10 text-center">
            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-8 text-[#C6A77B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#33251F] font-light italic leading-relaxed mb-10">
              "{current.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col items-center space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#33251F]">
                {current.clientName}
              </span>
              <span className="text-xs text-[#A99A8B]">{current.location}</span>
              <span className="text-[11px] text-[#C6A77B] tracking-wider uppercase font-medium">
                Ritual: {current.service}
              </span>
              <span className="text-[10px] text-[#A99A8B]/70 tracking-widest uppercase mt-2 flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{current.date} • {current.verifiedSource}</span>
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-[#E8DFD2] pt-6 mt-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#A99A8B]">
              TESTIMONIAL 0{activeIdx + 1} OF 0{CLIENT_TESTIMONIALS.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#E8DFD2] flex items-center justify-center hover:bg-[#E8DFD2] transition-colors"
                aria-label="Previous review"
              >
                <ArrowLeft className="w-4 h-4 text-[#33251F]" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#E8DFD2] flex items-center justify-center hover:bg-[#E8DFD2] transition-colors"
                aria-label="Next review"
              >
                <ArrowRight className="w-4 h-4 text-[#33251F]" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Supplementary Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {CLIENT_TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-6 bg-[#F7F3EB] border transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'border-[#C6A77B] shadow-md'
                  : 'border-[#E8DFD2] opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#A99A8B] mb-3">
                <span>★★★★★ 5.0</span>
                <span>{item.service.split(' ')[0]}</span>
              </div>
              <p className="font-serif text-sm italic text-[#33251F] line-clamp-3 mb-4">
                "{item.quote}"
              </p>
              <p className="text-xs font-semibold text-[#33251F] uppercase tracking-wider">
                {item.clientName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
