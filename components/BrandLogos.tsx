"use client";

import { BRANDS } from "@/lib/data";

export default function BrandLogos() {
  return (
    <div className="bg-white py-12 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-8">
          Trusted Medical &amp; Aesthetic Brand Partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 opacity-70">
          {BRANDS.map((brand, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-neutral-800 hover:text-neutral-950 transition-colors duration-200"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
