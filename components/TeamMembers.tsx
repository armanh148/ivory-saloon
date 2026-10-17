"use client";

import { useState } from "react";
import { IMAGES } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface TeamMembersProps {
  onOpenBooking: () => void;
}

export default function TeamMembers({ onOpenBooking }: TeamMembersProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section id="team" className="bg-[#EFE9DF] py-20 lg:py-28 border-b border-neutral-300/80">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="block text-xs font-bold uppercase tracking-[0.25em] text-neutral-600 mb-3">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase font-sans">
            TEAM MEMBERS
          </h2>
        </div>

        {/* Big Editorial Interactive Name List */}
        <div className="divide-y divide-neutral-300/80">
          {IMAGES.team.map((member, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={member.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={onOpenBooking}
                className="py-8 sm:py-10 group cursor-pointer transition-colors duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left: Name and Floating circular avatar */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                    {/* Floating circular portrait */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-md transition-all duration-300 flex-shrink-0 ${
                        isHovered ? "scale-110 ring-2 ring-neutral-900" : "opacity-80 scale-95"
                      }`}
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Member Name */}
                    <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-sans tracking-tight transition-all duration-200 ${
                      isHovered ? "text-neutral-950 translate-x-1" : "text-neutral-800/80 group-hover:text-neutral-950"
                    }`}>
                      {member.name}
                    </h3>
                  </div>

                  {/* Right: Role & Arrow */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-10 pl-20 lg:pl-0">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-600">
                      {member.role}
                    </span>

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                      isHovered ? "bg-neutral-950 text-white rotate-45" : "border border-neutral-400 text-neutral-700 group-hover:border-neutral-900 group-hover:text-neutral-950"
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
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
