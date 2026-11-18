import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ArrowUpRight, Check, Bot, User, Clock, MapPin, Phone } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface WhatsAppAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: string[];
  actionLink?: string;
}

export const WhatsAppAssistant: React.FC<WhatsAppAssistantProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Bonjour! I am Geneviève, your digital concierge at Elegance Saloon. How may I assist your beauty journey today?",
      time: "Just now",
      options: [
        "View Service Prices",
        "Book Bridal Consultation",
        "Salon Timings & Location",
        "Balayage Hair Colour Enquiry",
        "Chat Directly on WhatsApp"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // AI Receptionist Logic
    setTimeout(() => {
      let botReply = '';
      let options: string[] | undefined = undefined;
      const lower = text.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('menu')) {
        botReply = "Our bespoke services start at: Precision Architecture Cut from ₹1,200, French Balayage from ₹4,500, 24K Champagne Facial from ₹3,200, and Haute Bridal Couture from ₹15,000. Would you like to reserve a slot or ask for a customized quotation?";
        options = ["Book Appointment", "Bridal Packages", "Continue on WhatsApp"];
      } else if (lower.includes('bridal') || lower.includes('wedding') || lower.includes('marriage')) {
        botReply = "Our Private Bridal Chamber offers an unhurried luxury haven. We limit bookings to only two commissions per calendar day to ensure perfection. Includes saree/dupatta draping, trial styling, and 4K airbrush makeup. Would you like to check dates with our bridal coordinator?";
        options = ["Schedule Bridal Trial", "Check Wedding Dates", "Open WhatsApp Chat"];
      } else if (lower.includes('timing') || lower.includes('hour') || lower.includes('open') || lower.includes('sunday')) {
        botReply = "Elegance Saloon is open daily from Monday to Sunday, 10:00 AM – 8:30 PM. Walk-ins are warmly accepted, though reserved appointments enjoy priority styling.";
        options = ["Book Today's Slot", "Get Driving Directions"];
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('direction')) {
        botReply = "We are located on Amba Theatre Road, directly opposite Anusha Hospital, in Huda Colony, Gudimalkapur, Mehdipatnam, Hyderabad (500006). Convenient guest parking is available.";
        options = ["Open Google Maps", "Schedule My Visit"];
      } else if (lower.includes('hair') || lower.includes('balayage') || lower.includes('colour') || lower.includes('color')) {
        botReply = "Our French Balayage & Parisian Gloss is hand-painted to your natural hair undertone with zero harsh ammonia, leaving hair silky and reflective for up to 3 months. Would you like to book a complimentary 15-min hair analysis?";
        options = ["Book Hair Analysis", "Talk to Stylist on WhatsApp"];
      } else {
        botReply = "Merci for your message! Our senior salon coordinator is ready to assist you personally with tailored recommendations or appointment reservations.";
        options = ["Book Appointment Now", "Continue on WhatsApp", "View Opening Hours"];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  const handleWhatsAppRedirect = (customMsg?: string) => {
    const textParam = encodeURIComponent(
      customMsg || `Bonjour! I am contacting Elegance Saloon Hyderabad via the website atelier concierge regarding an appointment.`
    );
    window.open(`https://wa.me/${SALON_DATA.whatsappNumber}?text=${textParam}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 bg-[#33251F]/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#F7F3EB] border border-[#E8DFD2] shadow-2xl w-full sm:max-w-md h-[85vh] sm:h-[650px] flex flex-col overflow-hidden">
        {/* Atelier Concierge Header */}
        <div className="bg-[#33251F] text-[#F7F3EB] p-5 flex items-center justify-between border-b border-[#C6A77B]/40">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#C6A77B]/20 border border-[#C6A77B] flex items-center justify-center text-[#C6A77B]">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#33251F]"></span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-serif text-lg tracking-wide text-[#F7F3EB]">Geneviève</h4>
                <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#C6A77B]/30 text-[#C6A77B] border border-[#C6A77B]/50">
                  AI Atelier
                </span>
              </div>
              <p className="text-[10px] text-[#A99A8B] tracking-wider uppercase font-sans">
                Elegance Saloon Concierge • Hyderabad
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F7F3EB]/70 hover:text-[#C6A77B] transition-colors"
            aria-label="Close Concierge"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#FAF7F2]">
          <div className="text-center my-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A99A8B] bg-[#E8DFD2]/50 px-3 py-1">
              Encrypted Atelier Channel
            </span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#33251F] text-[#F7F3EB] rounded-none'
                    : 'bg-[#F7F3EB] text-[#33251F] border border-[#E8DFD2] rounded-none shadow-sm'
                }`}
              >
                <p className="font-light">{msg.text}</p>
                <span
                  className={`text-[9px] block mt-1 text-right ${
                    msg.sender === 'user' ? 'text-[#A99A8B]' : 'text-[#A99A8B]'
                  }`}
                >
                  {msg.time}
                </span>
              </div>

              {/* Quick Prompt Options */}
              {msg.options && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                  {msg.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (opt.includes('WhatsApp')) {
                          handleWhatsAppRedirect();
                        } else if (opt.includes('Book')) {
                          onOpenBooking();
                        } else if (opt.includes('Maps')) {
                          window.open(SALON_DATA.googleMapsLink, '_blank');
                        } else {
                          handleSend(opt);
                        }
                      }}
                      className="text-[11px] px-3 py-1.5 bg-[#F7F3EB] hover:bg-[#C6A77B] hover:text-[#F7F3EB] text-[#33251F] border border-[#E8DFD2] transition-colors text-left font-medium"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-xs text-[#A99A8B] italic p-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A77B] animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A77B] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A77B] animate-bounce [animation-delay:0.4s]"></span>
              <span>Geneviève is composing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Seamless WhatsApp Action Bar */}
        <div className="px-4 py-2 bg-[#F7F3EB] border-t border-[#E8DFD2] flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-[#33251F]">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-medium">WhatsApp Sync Active</span>
          </div>
          <button
            onClick={() => handleWhatsAppRedirect(messages[messages.length - 1]?.text)}
            className="text-[11px] uppercase tracking-wider text-emerald-700 font-semibold hover:underline flex items-center space-x-1"
          >
            <span>Continue in WhatsApp</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#FAF7F2] border-t border-[#E8DFD2]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about hair, facials, bridal, timings..."
              className="flex-1 bg-[#F7F3EB] border border-[#E8DFD2] px-4 py-2.5 text-xs text-[#33251F] focus:outline-none focus:border-[#C6A77B] placeholder-[#A99A8B]"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#33251F] text-[#F7F3EB] hover:bg-[#C6A77B] transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
