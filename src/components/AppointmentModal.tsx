import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SALON_DATA, SERVICES_COLLECTION, ServiceItem } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: selectedService ? selectedService.id : SERVICES_COLLECTION[0].id,
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C6A77B', '#E8DFD2', '#33251F']
    });
  };

  const handleSendToWhatsApp = () => {
    const chosenService = SERVICES_COLLECTION.find((s) => s.id === formData.serviceId);
    const serviceName = chosenService ? chosenService.title : 'Bespoke Consultation';
    const message = `Bonjour Elegance Saloon! I would like to confirm an appointment reservation:\n\n• Guest: ${formData.name}\n• Service: ${serviceName}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Phone: ${formData.phone}\n• Notes: ${formData.notes || 'None'}\n\nPlease confirm availability. Thank you!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${SALON_DATA.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#33251F]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#F7F3EB] border border-[#E8DFD2] shadow-2xl max-w-lg w-full overflow-hidden relative">
        {/* Modal Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-[#E8DFD2] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A77B] font-semibold block">
              Reservation Desk
            </span>
            <h3 className="font-serif text-2xl text-[#33251F]">
              Book Your Atelier Visit
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-[#33251F] hover:text-[#C6A77B] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#E8DFD2] flex items-center justify-center mx-auto text-[#C6A77B]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-[#33251F]">
                  Reservation Request Received
                </h4>
                <p className="text-xs text-[#A99A8B] mt-2 max-w-xs mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our atelier reception will confirm your slot for <strong>{formData.date} at {formData.time}</strong>.
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD2] text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A99A8B]">Location:</span>
                  <span className="font-medium text-[#33251F]">Amba Theatre Rd, Opp. Anusha Hospital</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A99A8B]">Contact Desk:</span>
                  <span className="font-medium text-[#33251F]">{SALON_DATA.phoneDisplay}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 bg-emerald-800 text-[#F7F3EB] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2 hover:bg-emerald-900 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-transparent border border-[#33251F] text-[#33251F] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#33251F] hover:text-[#F7F3EB] transition-colors"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A99A8B] mb-1 font-semibold">
                  Select Ritual or Service
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD2] p-3 text-xs text-[#33251F] focus:outline-none focus:border-[#C6A77B]"
                  required
                >
                  {SERVICES_COLLECTION.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A99A8B] mb-1 font-semibold">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD2] p-3 text-xs text-[#33251F] focus:outline-none focus:border-[#C6A77B]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A99A8B] mb-1 font-semibold">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD2] p-3 text-xs text-[#33251F] focus:outline-none focus:border-[#C6A77B]"
                  >
                    <option value="10:30 AM">10:30 AM (Morning Opening)</option>
                    <option value="12:00 PM">12:00 PM (Midday)</option>
                    <option value="02:30 PM">02:30 PM (Afternoon)</option>
                    <option value="04:30 PM">04:30 PM (Tea Time)</option>
                    <option value="06:30 PM">06:30 PM (Evening)</option>
                    <option value="07:30 PM">07:30 PM (Last Session)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A99A8B] mb-1 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sravanthi Rao"
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD2] p-3 text-xs text-[#33251F] focus:outline-none focus:border-[#C6A77B]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A99A8B] mb-1 font-semibold">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD2] p-3 text-xs text-[#33251F] focus:outline-none focus:border-[#C6A77B]"
                    required
                  />
                </div>
              </div>

              {/* Special Requests / Hair Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A99A8B] mb-1 font-semibold">
                  Special Notes or Bridal Inquiries (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={2}
                  placeholder="Mention any sensitivities, wedding dates, or reference photos..."
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD2] p-3 text-xs text-[#33251F] focus:outline-none focus:border-[#C6A77B]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#33251F] text-[#F7F3EB] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C6A77B] transition-colors"
                >
                  Confirm Reservation Request
                </button>
                <p className="text-[10px] text-center text-[#A99A8B] mt-2">
                  No advance payment needed. We will verify and lock your time slot.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
