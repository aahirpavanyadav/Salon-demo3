import React, { useState } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ServicesEditorial } from './components/ServicesEditorial';
import { SalonExperience } from './components/SalonExperience';
import { SignatureMoments } from './components/SignatureMoments';
import { BeautyJournalGallery } from './components/BeautyJournalGallery';
import { ClientTestimonials } from './components/ClientTestimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { WhatsAppAssistant } from './components/WhatsAppAssistant';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceItem } from './data/salonData';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#33251F] font-sans relative selection:bg-[#C6A77B]/20 selection:text-[#33251F]">
      {/* Editorial Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 01: Hero Masterpiece */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Section 02: Brand Story / Manifesto */}
        <BrandStory />

        {/* Section 03: The Editorial Collection (Services) */}
        <ServicesEditorial
          onSelectServiceForBooking={(service) => handleOpenBooking(service)}
        />

        {/* Section 04: The Photographic Salon Spaces */}
        <SalonExperience />

        {/* Section 05: Signature Moments (Interactive Before/After) */}
        <SignatureMoments />

        {/* Section 06: The Beauty Journal Gallery */}
        <BeautyJournalGallery />

        {/* Section 07: Verified Client Testimonials */}
        <ClientTestimonials />

        {/* Section 08: Verified Location, Coordinates & Hours */}
        <LocationContact
          onOpenBooking={() => handleOpenBooking()}
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Atelier Concierge Pill (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsWhatsAppOpen(true)}
          className="group relative flex items-center space-x-3 bg-[#33251F] text-[#F7F3EB] px-5 py-3.5 border border-[#C6A77B]/60 shadow-2xl hover:bg-[#C6A77B] transition-all duration-300"
          aria-label="Open Atelier WhatsApp AI Concierge"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-[#C6A77B] group-hover:text-[#33251F] transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-left">
            <span className="block text-[9px] uppercase tracking-[0.25em] text-[#C6A77B] group-hover:text-[#33251F] font-semibold transition-colors">
              Atelier Concierge
            </span>
            <span className="block text-xs font-serif italic text-[#F7F3EB] group-hover:text-[#33251F] transition-colors">
              WhatsApp AI Active
            </span>
          </div>
        </button>
      </div>

      {/* Interactive WhatsApp AI Assistant Drawer/Modal */}
      <WhatsAppAssistant
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        onOpenBooking={() => {
          setIsWhatsAppOpen(false);
          setIsBookingOpen(true);
        }}
      />

      {/* Editorial Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedService(null);
        }}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
