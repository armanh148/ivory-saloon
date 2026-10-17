"use client";

import { WORKING_STEPS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface WorkingProcessProps {
  onOpenBooking: () => void;
}

export default function WorkingProcess({ onOpenBooking }: WorkingProcessProps) {
  return (
    <section id="process" className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase font-sans">
              WORKING PROCESS
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 bg-[#1b110b] text-white px-7 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300 shadow-md group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKING_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-neutral-400 tracking-wider font-mono block mb-6 group-hover:text-neutral-900 transition-colors duration-200">
                  STEP {step.step}
                </span>
                <h3 className="text-xl font-bold uppercase text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium">
                <span>Phase 0{step.step}</span>
                <span className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-colors duration-200" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
