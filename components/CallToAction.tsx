"use client";

import { ArrowUpRight } from "lucide-react";

interface CallToActionProps {
  onOpenBooking: () => void;
}

export default function CallToAction({ onOpenBooking }: CallToActionProps) {
  return (
    <section className="relative bg-[#FAF7F2] py-28 lg:py-40 overflow-hidden border-t border-neutral-200">


      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        
        {/* ================= 4 FLOATING TILTED PHOTOS ================= */}
        
        {/* 1. TOP-LEFT PHOTO: Woman with skincare bottle, tilted -14deg */}
        <div className="hidden lg:block absolute left-8 xl:left-24 top-0 -translate-y-8 pointer-events-none z-10">
          <div className="w-44 h-56 xl:w-52 xl:h-64 overflow-hidden shadow-2xl -rotate-[14deg] hover:rotate-0 transition-transform duration-500 bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
              alt="Skincare serum ritual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2. TOP-RIGHT PHOTO: Elegant smiling mature woman with cream, tilted +10deg */}
        <div className="hidden lg:block absolute right-8 xl:right-24 top-0 -translate-y-6 pointer-events-none z-10">
          <div className="w-44 h-56 xl:w-52 xl:h-64 overflow-hidden shadow-2xl rotate-[10deg] hover:rotate-0 transition-transform duration-500 bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
              alt="Timeless skin beauty"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. BOTTOM-LEFT PHOTO: Woman with golden earrings, tilted +14deg */}
        <div className="hidden lg:block absolute left-24 xl:left-44 bottom-0 translate-y-12 pointer-events-none z-10">
          <div className="w-40 h-52 xl:w-48 xl:h-60 overflow-hidden shadow-2xl rotate-[14deg] hover:rotate-0 transition-transform duration-500 bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              alt="Radiant aesthetics portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4. BOTTOM-RIGHT PHOTO: Curly-haired smiling woman in white top, tilted -14deg */}
        <div className="hidden lg:block absolute right-24 xl:right-44 bottom-0 translate-y-12 pointer-events-none z-10">
          <div className="w-40 h-52 xl:w-48 xl:h-60 overflow-hidden shadow-2xl -rotate-[14deg] hover:rotate-0 transition-transform duration-500 bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
              alt="Glowing confidence"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= CENTER CONTENT ================= */}
        <div className="max-w-3xl mx-auto text-center relative z-20 py-8 lg:py-12">
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-sans tracking-tight text-[#22150e] leading-[1.12] mb-8">
            &ldquo;TRANSFORM YOUR HAIR <br />
            &amp; SKIN &ndash; START YOUR IVORY <br />
            JOURNEY TODAY!&rdquo;
          </h2>

          {/* Button: MAKE AN APPOINTMENT with white arrow circle */}
          <div className="flex justify-center mb-12">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 bg-[#1b110b] text-white pl-8 pr-3 py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300 shadow-xl active:scale-95"
            >
              <span>MAKE AN APPOINTMENT</span>
              <span className="w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Bracketed Info Row: Address, Phone, Email */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-neutral-600 font-mono tracking-wide pt-2">
            <span>[ Address : Gulshan-e-Iqbal Block 4, Karachi ]</span>
            <span>[ Phone : +92 345 2345055 ]</span>
            <span>[ Email : concierge@ivorysalon.pk ]</span>
          </div>

        </div>

      </div>
    </section>
  );
}
