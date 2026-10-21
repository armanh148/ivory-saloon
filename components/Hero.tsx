"use client";

import { IMAGES } from "@/lib/data";
import { ArrowDown, Star, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative bg-[#1b110b] text-cream-100 overflow-hidden pt-8 lg:pt-16 pb-16 lg:pb-24 border-b border-[#2d1c13]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#2a1b12] border border-[#3d271b] text-xs font-semibold tracking-wider text-cream-200 uppercase mb-8">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span>By Anum Zubair — Gulshan Branch, Karachi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[1.08] text-cream-50 font-sans mb-8">
              GLOW WITH <br />
              <span className="text-cream-100">EXPERT HAIR &amp;</span> <br />
              <span className="text-cream-200/90">SKIN CARE.</span>
            </h1>

            {/* Bottom Subtitle / Tagline */}
            <p className="text-cream-300/80 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-10">
              The premier destination for signature bridal makeovers, couture hair transformations &amp; clinical skin aesthetics in Karachi.
            </p>

            {/* Actions & Rating */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto text-center bg-white text-espresso-950 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cream-200 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
              >
                Schedule Visit
              </button>
              
              <a
                href="#treatments"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-cream-200 hover:text-white px-6 py-3.5 rounded-full border border-[#3d271b] hover:border-cream-300 transition-colors duration-200"
              >
                <span>Explore Treatments</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Client proof bar */}
            <div className="mt-12 pt-8 border-t border-[#2d1c13] flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#1b110b] overflow-hidden bg-neutral-800"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${
                        i === 1 ? "1544005313-94ddf0286df2" :
                        i === 2 ? "1517841905240-472988babdf9" :
                        i === 3 ? "1508214751196-bcfd4ca60f91" :
                        "1534528741775-53994a69daeb"
                      }?auto=format&fit=crop&w=100&q=80`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-luxury-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-cream-100 ml-1">4.9/5.0</span>
                </div>
                <p className="text-xs text-cream-300/70">Over 2,500+ transformations delivered</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Model */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#3d271b]/50 group">
              <img
                src={IMAGES.hero}
                alt="Model with glowing hair and skin"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Subtle vignette gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b110b] via-transparent to-transparent opacity-60" />

              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1b110b]/80 backdrop-blur-md border border-[#3d271b] text-left">
                <p className="text-xs italic text-cream-200 leading-snug">
                  &ldquo;The gold standard in clinical hair rejuvenation and luminous dermal aesthetics.&rdquo;
                </p>
                <span className="block text-[10px] font-semibold text-luxury-gold tracking-wider uppercase mt-1">
                  — IVORY SALON by Anum Zubair
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
