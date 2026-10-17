"use client";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { PHONE } from "@/lib/data";
export default function Location() {
  const rows = [
    [MapPin, "Bungalow # C-5, Allama Shabbir Ahmed Usmani Rd, Block 13 D, Gulshan-e-Iqbal, Karachi. Near Practical Schooling System, between Rab Medical and Total Petrol Pump."],
    [Clock, "Monday to Sunday, 11:30 AM – 9:00 PM"],
    [Phone, PHONE],
  ] as const;
  return (
    <section id="visit" className="px-5 py-28 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <h2 className="font-serif text-4xl font-light md:text-6xl">Visit the Gulshan studio</h2>
          <ul className="mt-10 space-y-6 text-ivory/80">
            {rows.map(([Icon, t], i) => (
              <li key={i} className="flex gap-4"><Icon className="mt-1 h-5 w-5 shrink-0 text-gold" /><span className="leading-relaxed">{t}</span></li>
            ))}
          </ul>
          <div className="mt-10"><MagneticButton href="https://maps.google.com/?q=24.9193219,67.0853721" variant="ghost"><Navigation className="h-4 w-4" /> Get directions</MagneticButton></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="h-96 overflow-hidden rounded-[1.75rem] border border-gold/20 lg:h-full lg:min-h-[28rem]">
          <iframe title="Ivory Salon Gulshan location" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 [filter:grayscale(1)_invert(.92)_contrast(.9)]"
            src="https://maps.google.com/maps?q=24.9193219,67.0853721&hl=en&z=17&output=embed" />
        </motion.div>
      </div>
    </section>
  );
}
