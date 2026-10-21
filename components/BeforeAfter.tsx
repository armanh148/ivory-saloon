"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, ChevronRight, Eye } from "lucide-react";
import { IMAGES } from "@/lib/data";

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<"hair" | "skin">("hair");

  const cases = {
    hair: {
      category: "FOLLICULAR RESTORATION",
      title: "Frontal Hairline & Temple Density Rejuvenation",
      image: IMAGES.beforeAfter.hair,
      timeline: "6 Months Post-Procedure",
      metrics: [
        { label: "Procedure", value: "Sapphire Micro-FUE" },
        { label: "Timeline", value: "Month 0 to Month 6" },
        { label: "Graft Density", value: "3,200 Follicular Units" },
        { label: "Natural Result", value: "100% Seamless Growth" },
      ],
      notes: "High-resolution clinical case documenting female temple density restoration and frontal hairline micrografting under senior trichologist care.",
    },
    skin: {
      category: "CLINICAL DERMAL AESTHETICS",
      title: "Severe Acne Clarifying & Hydra-Glass Resurfacing",
      image: IMAGES.beforeAfter.skin,
      timeline: "3 Clinical Sessions",
      metrics: [
        { label: "Procedure", value: "Medical Peel & HydraFacial" },
        { label: "Timeline", value: "3 Sessions (45 Days)" },
        { label: "Texture Refining", value: "98% Acne & Pore Reduction" },
        { label: "Skin Radiance", value: "Glass Dermal Finish" },
      ],
      notes: "Complete eradication of active cystic lesions, post-inflammatory hyperpigmentation smoothing, and barrier lipid restoration.",
    },
  };

  const current = cases[activeTab];

  return (
    <section id="before-after" className="relative bg-[#170e08] text-cream-100 py-24 lg:py-32 overflow-hidden border-b border-[#2d1c13]">
      
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27180f] border border-[#3d271b] text-luxury-gold text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Documented Transformations</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream-50 uppercase font-sans">
            BEFORE &amp; AFTER
          </h2>
          <p className="text-cream-300/70 text-sm sm:text-base mt-4 leading-relaxed">
            Real client transformations at Ivory Salon. Clinical consistency, verified results, and bespoke aesthetics.
          </p>

          {/* Tab Selector (Responsive on mobile) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 sm:mt-8 p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-[#22150e] border border-[#3d271b] shadow-inner max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => setActiveTab("hair")}
              className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "hair"
                  ? "bg-white text-espresso-950 shadow-lg scale-100"
                  : "text-cream-200 hover:text-white"
              }`}
            >
              <span>Case 01: Hair Restoration</span>
            </button>
            <button
              onClick={() => setActiveTab("skin")}
              className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "skin"
                  ? "bg-white text-espresso-950 shadow-lg scale-100"
                  : "text-cream-200 hover:text-white"
              }`}
            >
              <span>Case 02: Dermal Skin Glow</span>
            </button>
          </div>
        </div>

        {/* Master Comparison Showcase Card */}
        <div className="max-w-6xl mx-auto bg-[#1f130b] rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#3d271b] shadow-2xl relative">
          
          {/* Card Top Label Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#2e1d13] gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-luxury-gold">
                {current.category}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold uppercase text-cream-50 mt-1">
                {current.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full bg-[#2a1a12] border border-[#3d271b] text-xs font-semibold text-cream-200">
              <Eye className="w-3.5 h-3.5 text-luxury-gold" />
              <span>{current.timeline}</span>
            </div>
          </div>

          {/* Visual Showcase (Real Generated Clinical Comparison Image) */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-900 border border-[#3d271b] shadow-inner group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Clinical Case Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 mt-8 border-t border-[#2e1d13]">
            {current.metrics.map((metric, idx) => (
              <div key={idx} className="bg-[#26170e]/60 rounded-2xl p-4 border border-[#382317]">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono mb-1">
                  {metric.label}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-cream-50 flex items-center gap-1.5">
                  {idx === 3 && <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />}
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Clinical summary quote */}
          <div className="mt-6 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-cream-300/70">
            <p className="italic leading-relaxed max-w-3xl">
              &ldquo;{current.notes}&rdquo;
            </p>
            <a
              href="#treatments"
              className="inline-flex items-center gap-1.5 text-luxury-gold font-bold uppercase tracking-wider hover:text-white transition-colors flex-shrink-0"
            >
              <span>Explore Procedure</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
