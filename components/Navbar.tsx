"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Before & After", href: "#before-after" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1b110b] text-cream-100 border-b border-[#2d1c13]/60 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Sparkles className="w-5 h-5 text-luxury-gold group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-sans font-extrabold text-2xl tracking-[0.25em] text-cream-50 uppercase">
            IVORY SALON
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-cream-200/80">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cream-50 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-luxury-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-3 bg-white text-espresso-950 font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-cream-200 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Book An Appointment</span>
            <span className="w-6 h-6 rounded-full bg-espresso-950 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-cream-100 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1b110b] border-t border-[#2d1c13] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-cream-200 hover:text-white text-base py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#2d1c13]">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-3 bg-white text-espresso-950 font-semibold text-xs tracking-wider uppercase py-3 rounded-full"
            >
              <span>Book An Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
