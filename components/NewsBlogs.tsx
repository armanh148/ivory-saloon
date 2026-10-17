"use client";

import { IMAGES } from "@/lib/data";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";

export default function NewsBlogs() {
  const { main, side } = IMAGES.blogs;

  return (
    <section id="blog" className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Our Insights
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase font-sans">
              NEWS &amp; BLOGS
            </h2>
          </div>

          <div>
            <a
              href="#blog"
              className="inline-flex items-center gap-3 bg-[#1b110b] text-white px-7 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300 shadow-md group"
            >
              <span>All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Editorial Layout: Large Left Card + 2 Stacked Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Big Featured Left Article */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
              <img
                src={main.image}
                alt={main.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-900 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                {main.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{main.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 uppercase font-sans leading-snug group-hover:text-neutral-700 transition-colors duration-200">
                  {main.title}
                </h3>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Read Article
                </span>
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {side.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between flex-1"
              >
                <div className="flex gap-4 sm:gap-6 items-start">
                  {/* Thumbnail */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 uppercase font-sans leading-snug group-hover:text-neutral-700 transition-colors duration-200">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                  <span>{item.date}</span>
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
