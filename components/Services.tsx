"use client";
import { motion } from "motion/react";
import Img from "./Img";
import { services, waLink } from "@/lib/data";
export default function Services() {
  return (
    <section id="services" className="bg-charcoal px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-2xl font-serif text-4xl font-light leading-tight md:text-6xl">Four rooms, one standard of care.</motion.h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a key={s.title} href={waLink(s.title)} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-gold/15 hover:border-gold/60 transition-colors">
              <Img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/10" />
              <div className="relative p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-obsidian/50 text-gold backdrop-blur"><s.icon className="h-5 w-5" /></span>
                <h3 className="font-serif text-2xl leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{s.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
