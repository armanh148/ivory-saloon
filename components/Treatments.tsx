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
    <section id="treatments" className="relative bg-[#FAF7F2] py-24 lg:py-32 overflow-hidden border-b border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-3 font-mono">
            [ SERVICE ]
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#22150e] uppercase font-sans">
            OUR TREATMENTS
          </h2>
        </div>

        {/* Treatments List */}
        <div className="space-y-6 lg:space-y-8">
          {TREATMENTS.map((treatment, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={treatment.num}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => onSelectTreatment(treatment.title)}
                className={`group relative transition-all duration-300 cursor-pointer ${
                  isActive ? "py-10 lg:py-14" : "py-5 sm:py-6"
                }`}
              >
                {/* ACTIVE STATE: Giant Title + Frosted Marquee Ribbon + Floating Tilted Photo */}
                {isActive ? (
                  <div className="relative">
                    {/* Background Big Row Title */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase font-sans tracking-tight text-[#22150e] leading-none select-none">
                        {treatment.title}
                      </h3>
                    </div>

                    {/* Horizontal Frosted Ribbon Strip running across the text: "ADD TO CART" */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 -mx-6 lg:-mx-12 overflow-hidden py-3 sm:py-4 bg-[#b5a798]/40 backdrop-blur-md border-y border-white/40 shadow-sm flex items-center">
                      <div className="flex animate-marquee items-center gap-12 whitespace-nowrap min-w-full">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="flex items-center gap-12 flex-shrink-0">
                            <span
                              className={`text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white drop-shadow-sm ${
                                i % 3 === 0
                                  ? "border border-white/80 px-4 py-1 rounded-full bg-white/20"
                                  : ""
                              }`}
                            >
                              ADD TO CART
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Tilted Photo on Right (matching screenshot angle & cheek cream photo) */}
                    <div className="absolute right-4 sm:right-16 lg:right-32 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-28 h-36 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-2xl overflow-hidden shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500 border-4 border-white bg-neutral-100">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* NORMAL / INACTIVE ROW */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-neutral-200/80 pb-5 sm:pb-6 group-hover:border-neutral-400 transition-colors duration-200">
                    
                    {/* Left: Price in brackets + Title */}
                    <div className="md:col-span-5 flex items-center gap-4 sm:gap-6">
                      <span className="text-xs sm:text-sm font-semibold text-neutral-500 tracking-wider font-mono flex-shrink-0">
                        [ {treatment.price} ]
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight uppercase font-sans text-neutral-900 group-hover:text-[#22150e] transition-colors duration-200">
                        {treatment.title}
                      </h3>
                    </div>

                    {/* Middle: Pills */}
                    <div className="md:col-span-6 flex flex-wrap gap-2.5 items-center">
                      {treatment.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs sm:text-[13px] font-medium text-neutral-600 bg-white border border-neutral-200/90 shadow-sm px-4 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Right: Clean Arrow Icon */}
                    <div className="md:col-span-1 flex justify-end">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 group-hover:text-neutral-950 group-hover:scale-110 transition-all duration-200">
                        <ArrowUpRight className="w-5 h-5 stroke-[1.75]" />
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
