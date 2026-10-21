"use client";

import { useState } from "react";
import { TREATMENTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface TreatmentsProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export default function Treatments({ onSelectTreatment }: TreatmentsProps) {
  // Default to item 2 ("HAIR TRANSPLANT") matching the screenshot exactly
  const [activeIdx, setActiveIdx] = useState<number>(2);

  return (
    <section id="treatments" className="relative bg-[#FAF7F2] py-16 sm:py-20 lg:py-32 overflow-hidden border-b border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-2 sm:mb-3 font-mono">
            [ SERVICE ]
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#22150e] uppercase font-sans">
            OUR TREATMENTS
          </h2>
        </div>

        {/* Treatments List */}
        <div className="divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80">
          {TREATMENTS.map((treatment, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={treatment.num}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => onSelectTreatment(treatment.title)}
                className={`group relative cursor-pointer transition-all duration-300 py-5 sm:py-7 lg:py-10 ${
                  isActive ? "bg-black/[0.015]" : "hover:bg-black/[0.01]"
                }`}
              >
                {/* 1. NORMAL / INACTIVE ROW VIEW */}
                <div
                  className={`transition-all duration-300 ${
                    isActive ? "opacity-0 invisible pointer-events-none -translate-y-1" : "opacity-100 visible"
                  }`}
                >
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-3 sm:gap-4 md:items-center">
                    {/* Left: Price in brackets + Title */}
                    <div className="md:col-span-5 flex items-center justify-between md:justify-start gap-3 sm:gap-6">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-neutral-500 tracking-wider font-mono flex-shrink-0">
                          [ {treatment.price} ]
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight uppercase font-sans text-neutral-900 group-hover:text-[#22150e] transition-colors duration-200 truncate">
                          {treatment.title}
                        </h3>
                      </div>

                      {/* Mobile Arrow Icon (Visible on mobile right next to header) */}
                      <div className="md:hidden flex-shrink-0">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-neutral-200 text-neutral-700 shadow-sm">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Middle: Tags */}
                    <div className="md:col-span-6 flex flex-wrap gap-2 items-center">
                      {treatment.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] sm:text-xs md:text-[13px] font-medium text-neutral-600 bg-white border border-neutral-200/90 shadow-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Right: Desktop Clean Arrow Icon */}
                    <div className="hidden md:flex md:col-span-1 justify-end">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 group-hover:text-neutral-950 group-hover:scale-110 transition-all duration-200">
                        <ArrowUpRight className="w-5 h-5 stroke-[1.75]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. ACTIVE STATE VIEW (Responsive & Pointer-Events-None) */}
                <div
                  className={`absolute inset-0 flex items-center px-0 transition-all duration-300 pointer-events-none ${
                    isActive ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-[0.98]"
                  }`}
                >
                  <div className="relative w-full h-full flex items-center overflow-hidden">
                    {/* Background Big Row Title with Responsive Padding to avoid overlapping photo */}
                    <h3 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase font-sans tracking-tight text-[#22150e] leading-snug sm:leading-none select-none pr-16 sm:pr-36 md:pr-48 lg:pr-64 truncate sm:overflow-visible">
                      {treatment.title}
                    </h3>

                    {/* Horizontal Frosted Ribbon Strip running across: "ADD TO CART" */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 -mx-4 sm:-mx-6 lg:-mx-12 overflow-hidden py-2 sm:py-3 lg:py-3.5 bg-[#b5a798]/50 backdrop-blur-md border-y border-white/50 shadow-sm flex items-center pointer-events-none">
                      <div className="flex animate-marquee items-center gap-6 sm:gap-10 md:gap-12 whitespace-nowrap min-w-full">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="flex items-center gap-6 sm:gap-10 md:gap-12 flex-shrink-0">
                            <span
                              className={`text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white drop-shadow-sm ${
                                i % 3 === 0
                                  ? "border border-white/80 px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full bg-white/20"
                                  : ""
                              }`}
                            >
                              ADD TO CART
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Tilted Photo on Right (Responsive sizing & placement) */}
                    <div className="absolute right-0 sm:right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-16 h-20 sm:w-28 sm:h-36 md:w-36 md:h-48 lg:w-40 lg:h-52 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl rotate-3 sm:rotate-6 transition-transform duration-500 border-2 sm:border-4 border-white bg-neutral-100">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
