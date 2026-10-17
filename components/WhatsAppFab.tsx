"use client";

import { MessageCircle } from "lucide-react";
import { SITE_INFO } from "@/lib/data";

export default function WhatsAppFab() {
  const handleClick = () => {
    const message = encodeURIComponent("Hello LUXEZA Aesthetics, I would like to inquire about booking an appointment.");
    window.open(`https://wa.me/${SITE_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <button
        onClick={handleClick}
        className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
          Book on WhatsApp
        </span>
      </button>
    </div>
  );
}
