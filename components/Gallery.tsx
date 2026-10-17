"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Img from "./Img";
import { gallery } from "@/lib/data";
export default function Gallery() {
  const tabs = Object.keys(gallery);
  const [tab, setTab] = useState(tabs[0]);
  const [light, setLight] = useState<{ src: string; label: string } | null>(null);
  return (
    <section id="portfolio" className="px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl font-light md:text-6xl">The portfolio</h2>
          <div role="tablist" className="flex w-fit gap-1 rounded-full border border-gold/20 p-1">
            {tabs.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
                className="relative rounded-full px-5 py-2 text-sm transition-colors">
                {tab === t && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-gold" />}
                <span className={`relative ${tab === t ? "text-obsidian" : "text-ivory/70"}`}>{t}</span>
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-3 md:auto-rows-[26rem]">
            {gallery[tab].map((g, i) => (
              <motion.button key={g.label} onClick={() => setLight(g)} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`group relative overflow-hidden rounded-[1.75rem] text-left ${i === 0 ? "md:row-span-1" : ""} ${i === 1 ? "md:mt-12" : ""}`}>
                <Img src={g.src} alt={g.label} className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/20" />
                <span className="absolute bottom-5 left-5 font-serif text-xl italic">{g.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {light && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLight(null)}
            onKeyDown={(e) => e.key === "Escape" && setLight(null)} role="dialog" aria-modal="true" aria-label={light.label}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/95 p-5 backdrop-blur-md">
            <button aria-label="Close preview" className="absolute right-5 top-5 text-gold"><X /></button>
            <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} className="max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-3xl">
              <Img src={light.src} alt={light.label} className="max-h-[85vh] w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
