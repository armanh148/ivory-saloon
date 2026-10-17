"use client";

import { Sparkles } from "lucide-react";

interface MarqueeStripProps {
  onOpenBooking: () => void;
}

export default function MarqueeStrip({ onOpenBooking }: MarqueeStripProps) {
  const items = [
    "Book An Appointment",
    "Make An Appointment",
    "Consult Our Specialists",
    "Book An Appointment",
    "Make An Appointment",
    "Bespoke Hair & Skin Care",
    "Book An Appointment",
    "Make An Appointment",
  ];

  return (
    <div
      onClick={onOpenBooking}
      className="cursor-pointer bg-white border-y border-neutral-200 py-3.5 overflow-hidden whitespace-nowrap flex select-none hover:bg-neutral-50 transition-colors duration-200"
    >
      <div className="flex animate-marquee items-center gap-8 min-w-full">
        {items.concat(items).map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 flex-shrink-0">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-neutral-800">
              {text}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
