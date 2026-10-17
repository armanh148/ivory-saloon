"use client";

import { IMAGES } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#EFE9DF] py-20 lg:py-28 border-b border-neutral-300">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="block text-xs font-bold uppercase tracking-[0.25em] text-neutral-600 mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase font-sans">
            PEOPLE&apos;S OBSERVATION
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMAGES.testimonials.map((t, idx) => {
            const isFeatured = t.featured;

            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-[#1b110b] text-cream-100 shadow-2xl scale-[1.03] border border-[#3d271b]"
                    : "bg-white text-neutral-900 shadow-sm border border-neutral-200 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Client Info Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-300">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider">
                          {t.name}
                        </h4>
                        <span className={`text-[11px] uppercase tracking-wider ${
                          isFeatured ? "text-neutral-400" : "text-neutral-500"
                        }`}>
                          {t.role}
                        </span>
                      </div>
                    </div>

                    <Quote className={`w-6 h-6 ${
                      isFeatured ? "text-luxury-gold" : "text-neutral-300"
                    }`} />
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-luxury-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className={`text-sm leading-relaxed ${
                    isFeatured ? "text-cream-200 font-light" : "text-neutral-700"
                  }`}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className={`mt-8 pt-4 border-t text-[11px] font-semibold tracking-widest uppercase flex items-center justify-between ${
                  isFeatured ? "border-[#3d271b] text-neutral-400" : "border-neutral-100 text-neutral-400"
                }`}>
                  <span>Treatment Verified</span>
                  <span>100% Recommended</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
