import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Clock, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'The Experience', href: '#experience' },
    { name: 'Moments', href: '#moments' },
    { name: 'The Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F3EB]/90 backdrop-blur-md border-b border-[#E8DFD2] py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a href="#hero" className="group flex flex-col">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.18em] text-[#33251F] font-medium uppercase group-hover:text-[#C6A77B] transition-colors">
              ELEGANCE SALOON
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A99A8B] -mt-1 font-sans">
              L'Atelier de Beauté • Hyderabad
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#33251F]/80 hover:text-[#C6A77B] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A77B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Book Appointment */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenWhatsApp}
              className="text-xs uppercase tracking-[0.2em] text-[#A99A8B] hover:text-[#33251F] transition-colors flex items-center space-x-1 py-2 px-3"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Concierge</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] font-medium px-5 py-2.5 bg-[#33251F] text-[#F7F3EB] border border-[#33251F] hover:bg-transparent hover:text-[#33251F] transition-all duration-300 rounded-none"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#33251F] hover:text-[#C6A77B] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Magazine Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#F7F3EB] transition-all duration-500 flex flex-col justify-between p-8 md:p-14 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E8DFD2] pb-6">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.18em] text-[#33251F] uppercase">
              ELEGANCE SALOON
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A99A8B]">
              L'Atelier de Beauté
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 border border-[#E8DFD2] rounded-full hover:bg-[#E8DFD2]/40 transition-colors"
            aria-label="Close Navigation Menu"
          >
            <X className="w-6 h-6 text-[#33251F]" />
          </button>
        </div>

        {/* Magazine Nav Links */}
        <div className="py-8 flex flex-col space-y-5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A77B]">
            Table of Contents • Vol. 02
          </span>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-baseline justify-between border-b border-[#E8DFD2]/60 pb-3"
            >
              <span className="font-serif text-3xl md:text-4xl text-[#33251F] group-hover:text-[#C6A77B] group-hover:italic transition-all">
                {link.name}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#A99A8B] font-mono">
                0{idx + 1}
              </span>
            </a>
          ))}
        </div>

        {/* Footer info in menu */}
        <div className="border-t border-[#E8DFD2] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#A99A8B]">
          <div className="space-y-1">
            <p className="flex items-center space-x-2 text-[#33251F]">
              <MapPin className="w-3.5 h-3.5 text-[#C6A77B]" />
              <span>Gudimalkapur, Mehdipatnam, Hyderabad</span>
            </p>
            <p className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#C6A77B]" />
              <span>Mon – Sun: 10:00 AM – 8:30 PM</span>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#33251F] text-[#F7F3EB] uppercase tracking-[0.2em] text-xs font-medium"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
