"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";
export default function Reviews() {
  return (
    <section id="reviews" className="bg-charcoal px-5 py-28 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="gold-text font-serif text-8xl font-light leading-none md:text-9xl">4.8</p>
          <div className="mt-3 flex gap-1 text-gold" aria-label="4.8 out of 5 stars">{[0,1,2,3,4].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-4 max-w-xs text-ivory/65">Average rating from our Google reviews at the Gulshan branch.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="flex flex-col justify-between rounded-[1.75rem] border border-gold/15 bg-panel p-7">
              <blockquote className="font-serif text-xl leading-relaxed text-ivory/90">“{r.text}”</blockquote>
              <figcaption className="mt-8 text-sm"><span className="text-ivory">{r.name}</span><span className="block text-gold">{r.service}</span></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
