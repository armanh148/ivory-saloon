"use client";

import { useState } from "react";
import { X, CheckCircle, Calendar, Clock, Phone, User } from "lucide-react";
import { TREATMENTS, SITE_INFO } from "@/lib/data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedTreatment,
}: BookingModalProps) {
  const [treatment, setTreatment] = useState(preselectedTreatment || TREATMENTS[0].title);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:00 AM");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello IVORY SALON Gulshan, I would like to confirm my consultation booking for:
• Service: ${treatment}
• Name: ${name || "Client"}
• Date: ${date || "Earliest available"}
• Preferred Time: ${time}`
    );
    window.open(`https://wa.me/${SITE_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-300 text-neutral-900 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold inline-block" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                VIP Clinical Reservation
              </span>
            </div>

            <h3 className="text-2xl font-extrabold uppercase font-sans text-neutral-900 mb-6">
              Book Your Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Treatment / Service
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.num} value={t.title}>
                      {t.num}. {t.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Phone / WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+92 345 2345055"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    >
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="06:30 PM">06:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#1b110b] text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg active:scale-95"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold uppercase font-sans text-neutral-900 mb-2">
              Appointment Requested!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto mb-6">
              Thank you, <span className="font-bold text-neutral-900">{name || "Client"}</span>. Our clinical concierge will contact you on <span className="font-bold text-neutral-900">{phone || "your number"}</span> to finalize your slot.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-[#25D366] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-colors shadow-md"
              >
                Instant Confirmation on WhatsApp
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs font-semibold text-neutral-500 hover:text-neutral-900"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
