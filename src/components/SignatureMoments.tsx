import React, { useState } from 'react';
import { ArrowLeftRight, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { SIGNATURE_TRANSFORMATIONS } from '../data/salonData';

export const SignatureMoments: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTransformationIndex, setActiveTransformationIndex] = useState(0);

  const activeTransformation = SIGNATURE_TRANSFORMATIONS[activeTransformationIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="moments" className="py-24 md:py-36 bg-[#FAF7F2] relative border-t border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Masthead */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C6A77B] block mb-3 font-medium">
            Chapter III • Signature Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#33251F] font-normal leading-[1.1]">
            THE ALCHEMY OF <br />
            <span className="italic text-[#C6A77B]">TRANSFORMATION</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A99A8B] font-light max-w-xl mx-auto">
            Witness the subtle power of customized colour chemistry, botanical nutrition, and 
            sculptural balance. Slide across to inspect the transformation.
          </p>
          <div className="w-12 h-[1px] bg-[#C6A77B] mx-auto mt-6"></div>
        </div>

        {/* Toggle between Transformations */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#E8DFD2]/60 border border-[#E8DFD2] rounded-none">
            {SIGNATURE_TRANSFORMATIONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTransformationIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                  activeTransformationIndex === idx
                    ? 'bg-[#33251F] text-[#F7F3EB]'
                    : 'text-[#33251F] hover:text-[#C6A77B]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before / After Dual Reveal Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Slider Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#E8DFD2] shadow-atelier-elevated border border-[#E8DFD2] select-none">
              {/* After Image (Background) */}
              <img
                src={activeTransformation.afterImage}
                alt="After Transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#33251F]/90 text-[#F7F3EB] px-3.5 py-1 text-xs font-mono uppercase tracking-widest z-10">
                AFTER • ATELIER FINISH
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img
                  src={activeTransformation.beforeImage}
                  alt="Before Transformation"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale-[25%] contrast-[95%]"
                />
                <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 text-[#33251F] px-3.5 py-1 border border-[#E8DFD2] text-xs font-mono uppercase tracking-widest z-10">
                  BEFORE • CONSULTATION
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#FAF7F2] shadow-2xl pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#33251F] text-[#F7F3EB] flex items-center justify-center border-2 border-[#FAF7F2] shadow-lg">
                  <ArrowLeftRight className="w-4 h-4 text-[#C6A77B]" />
                </div>
              </div>

              {/* Range Input Control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag before and after transformation"
              />
            </div>

            {/* Slider Hint */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#A99A8B]">
              <span className="flex items-center space-x-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C6A77B]" />
                <span>Drag slider horizontally to compare</span>
              </span>
              <span className="font-mono">{sliderPos}% / 100%</span>
            </div>
          </div>

          {/* Transformation Editorial Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C6A77B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Case Study Dossier</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#33251F]">
              {activeTransformation.title}
            </h3>

            <p className="font-serif italic text-lg text-[#C6A77B]">
              "{activeTransformation.tagline}"
            </p>

            <div className="w-12 h-[1px] bg-[#E8DFD2]"></div>

            <p className="text-sm sm:text-base text-[#33251F]/80 leading-relaxed font-light">
              {activeTransformation.description}
            </p>

            <div className="p-5 bg-[#F7F3EB] border border-[#E8DFD2] space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider text-[#A99A8B]">TECHNIQUE:</span>
                <span className="font-medium text-[#33251F]">{activeTransformation.technique}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider text-[#A99A8B]">PERFORMED BY:</span>
                <span className="font-medium text-[#33251F]">{activeTransformation.stylist}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider text-[#A99A8B]">SUSTAINED RADIANCE:</span>
                <span className="font-medium text-[#C6A77B]">Up to 12 Weeks with Salon Care</span>
              </div>
            </div>

            <p className="text-[11px] text-[#A99A8B] uppercase tracking-wider">
              Ready for your custom transformation? Book a complimentary 15-minute consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
