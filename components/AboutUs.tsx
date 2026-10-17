"use client";

import { ArrowUpRight } from "lucide-react";

interface AboutUsProps {
  onOpenBooking: () => void;
}

export default function AboutUs({ onOpenBooking }: AboutUsProps) {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1512290900672-1f55b9e59d33?auto=format&fit=crop&w=600&q=80",
      alt: "Skin foundation & hydration ritual",
      stagger: "up", // Positioned higher
    },
    {
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
      alt: "Smiling woman with cotton pad skincare",
      stagger: "down", // Positioned lower
    },
    {
      src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      alt: "Cheek cream application and glow",
      stagger: "up", // Positioned higher
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      alt: "Silky golden blonde hair portrait",
      stagger: "down", // Positioned lower
    },
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      alt: "Radiant complexion with glossy dark hair",
      stagger: "up", // Positioned higher
    },
  ];

  return (
    <section id="about" className="relative bg-[#FAF7F2] pt-24 pb-32 overflow-hidden border-b border-neutral-200">
      
      {/* Decorative Starburst / Sparkle Ambient SVG Cluster in the Center matching screenshot */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <g id="about-sparkle">
              <path
                d="M14 0 Q14 14 0 14 Q14 14 14 28 Q14 14 28 14 Q14 14 14 0 Z"
                fill="#b8a798"
              />
            </g>
          </defs>
          <use href="#about-sparkle" x="38%" y="18%" transform="scale(1.2)" />
          <use href="#about-sparkle" x="44%" y="12%" transform="scale(0.8)" />
          <use href="#about-sparkle" x="48%" y="22%" transform="scale(1.4)" />
          <use href="#about-sparkle" x="52%" y="15%" transform="scale(0.9)" />
          <use href="#about-sparkle" x="42%" y="30%" transform="scale(1.0)" />
          <use href="#about-sparkle" x="50%" y="34%" transform="scale(0.7)" />
          <use href="#about-sparkle" x="65%" y="65%" transform="scale(1.1)" />
          <use href="#about-sparkle" x="85%" y="75%" transform="scale(0.8)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header & Founder Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 lg:mb-28">
          
          {/* Left Title */}
          <div className="lg:col-span-6">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-4 font-mono">
              [ ABOUT US ]
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#22150e] uppercase font-sans leading-[1.08]">
              KNOW MORE ABOUT <br />
              <span>IVORY SALON.</span>
            </h2>
          </div>

          {/* Right Founder Card & Story */}
          <div className="lg:col-span-6 flex flex-col justify-start max-w-xl">
            {/* Founder Avatar & Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Anum Zubair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-neutral-900 font-sans">
                  ANUM ZUBAIR
                </h4>
                <p className="text-xs text-neutral-500 font-medium tracking-wide">
                  Founder &amp; Beauty Visionary
                </p>
              </div>
            </div>

            {/* Quote Paragraph */}
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 font-normal font-sans">
              &ldquo;Immerse yourself in the world of Ivory Salon, where cutting-edge clinical science, bespoke bridal expertise, and a passion for exceptional care come together to create transformative solutions, helping you achieve confidence and effortless radiance.&rdquo;
            </p>

            {/* Pill Button: MORE ABOUT US ↗ */}
            <div>
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-3 bg-[#1b110b] text-white pl-7 pr-2.5 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300 shadow-xl active:scale-95"
              >
                <span>MORE ABOUT US</span>
                <span className="w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* 5-Photo Staggered Wave Collage (Up, Down, Up, Down, Up) matching screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-start pt-4">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group shadow-md transition-all duration-500 hover:-translate-y-1.5 bg-neutral-100 ${
                item.stagger === "down"
                  ? "lg:translate-y-12 xl:translate-y-14"
                  : "lg:translate-y-0"
              }`}
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
