"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
export default function MagneticButton({ href, children, variant = "solid", external = true }:
  { href: string; children: React.ReactNode; variant?: "solid" | "ghost"; external?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const base = "relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-shadow duration-500";
  const style = variant === "solid"
    ? "bg-gold text-obsidian hover:shadow-[0_0_40px_-4px_rgba(212,175,55,.7)]"
    : "border border-gold/50 text-ivory hover:border-champagne hover:shadow-[0_0_30px_-6px_rgba(212,175,55,.6)]";
  return (
    <motion.a ref={ref} href={href} style={{ x, y }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }}
      target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`${base} ${style}`}>
      {children}
    </motion.a>
  );
}
