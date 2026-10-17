"use client";

export default function WhyUs() {
  const items = {
    expertCare: {
      tag: "[ EXPERT-BACKED CARE ]",
      img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      alt: "Expert-backed care with cream application",
    },
    tailoredSolutions: {
      tag: "[ TAILORED SOLUTIONS ]",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      alt: "Tailored aesthetic solutions",
    },
    luxuryNature: {
      tag: "[ LUXURY & NATURE ]",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
      alt: "Luxury and nature center showcase",
    },
    visibleResults: {
      tag: "[ VISIBLE RESULTS ]",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      alt: "Visible clinical results",
    },
    sustainabilityFocus: {
      tag: "[ SUSTAINABILITY FOCUS ]",
      img: "https://images.unsplash.com/photo-1608248597359-0125740a3249?auto=format&fit=crop&w=600&q=80",
      alt: "Sustainability and purity focus",
    },
  };

  return (
    <section className="relative bg-[#FAF7F2] py-24 lg:py-32 overflow-hidden border-b border-neutral-200">
      
      {/* Decorative Starburst / Sparkle Ambient SVG Graphics matching screenshot background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <g id="sparkle-star">
              <path
                d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z"
                fill="#b8a798"
              />
            </g>
          </defs>
          <use href="#sparkle-star" x="18%" y="15%" transform="scale(1.2)" />
          <use href="#sparkle-star" x="24%" y="22%" transform="scale(0.8)" />
          <use href="#sparkle-star" x="32%" y="12%" transform="scale(1.4)" />
          <use href="#sparkle-star" x="38%" y="26%" transform="scale(0.7)" />
          <use href="#sparkle-star" x="65%" y="75%" transform="scale(1.1)" />
          <use href="#sparkle-star" x="72%" y="82%" transform="scale(1.5)" />
          <use href="#sparkle-star" x="80%" y="70%" transform="scale(0.9)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-3 font-mono">
            [ WHY CHOOSE US ]
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#22150e] uppercase font-sans">
            WHY IVORY SALON?
          </h2>
        </div>

        {/* 5-Photo Staggered Gallery Layout matching the exact arrangement in the screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 lg:gap-6 items-end">
          
          {/* Photo 1: EXPERT-BACKED CARE */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-end">
            <span className="block text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-600 mb-2.5 font-mono">
              {items.expertCare.tag}
            </span>
            <div className="aspect-[4/5] rounded-none overflow-hidden bg-neutral-200 group shadow-sm hover:shadow-md transition-shadow">
              <img
                src={items.expertCare.img}
                alt={items.expertCare.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Photo 2: TAILORED SOLUTIONS */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-end">
            <span className="block text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-600 mb-2.5 font-mono">
              {items.tailoredSolutions.tag}
            </span>
            <div className="aspect-[4/5] rounded-none overflow-hidden bg-neutral-200 group shadow-sm hover:shadow-md transition-shadow">
              <img
                src={items.tailoredSolutions.img}
                alt={items.tailoredSolutions.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Photo 3: CENTERPIECE (Taller, wider, with bottom tag [ LUXURY & NATURE ]) */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-end">
            <div className="aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-none overflow-hidden bg-neutral-900 shadow-md group">
              <img
                src={items.luxuryNature.img}
                alt={items.luxuryNature.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <span className="block text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-600 mt-3 font-mono">
              {items.luxuryNature.tag}
            </span>
          </div>

          {/* Photo 4: VISIBLE RESULTS (Stepped down on right) */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-end">
            <span className="block text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-600 mb-2.5 font-mono">
              {items.visibleResults.tag}
            </span>
            <div className="aspect-[4/5] rounded-none overflow-hidden bg-neutral-200 group shadow-sm hover:shadow-md transition-shadow">
              <img
                src={items.visibleResults.img}
                alt={items.visibleResults.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Photo 5: SUSTAINABILITY FOCUS (Stepped down on far right) */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-end">
            <span className="block text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-600 mb-2.5 font-mono">
              {items.sustainabilityFocus.tag}
            </span>
            <div className="aspect-[4/5] rounded-none overflow-hidden bg-neutral-200 group shadow-sm hover:shadow-md transition-shadow">
              <img
                src={items.sustainabilityFocus.img}
                alt={items.sustainabilityFocus.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
