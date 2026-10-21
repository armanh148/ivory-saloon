"use client";

import { ArrowUp, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#140b07] text-cream-200 border-t border-[#2d1c13] pt-20 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-[#2d1c13]">
          
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center mb-6">
              <span className="font-sans font-extrabold text-2xl tracking-[0.25em] text-cream-50 uppercase">
                IVORY SALON
              </span>
            </div>
            <p className="text-xs leading-relaxed text-cream-300/70 mb-6">
              By Anum Zubair. Karachi’s premier luxury aesthetic sanctuary for signature bridal makeovers, couture hair artistry, and medical-grade facials.
            </p>
            <div className="text-xs text-cream-300/80 space-y-1">
              <p>Gulshan-e-Iqbal Block 4, Karachi</p>
              <p>Concierge: +92 345 2345055</p>
              <p>Email: concierge@ivorysalon.pk</p>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-50 mb-6">
              Treatments
            </h4>
            <ul className="space-y-3 text-xs text-cream-300/70">
              <li><a href="#treatments" className="hover:text-white transition-colors">Chemical Peelings</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Medical Tattooing &amp; Nano Brows</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">FUE Hair Restoration &amp; PRP</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Hyaluronic Dermal Fillers</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Fractional Laser Skin Resurfacing</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-50 mb-6">
              Information
            </h4>
            <ul className="space-y-3 text-xs text-cream-300/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Our Founder</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Real Patient Results</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">4-Step Clinical Protocol</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Board-Certified Specialists</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Medical Journal &amp; Press</a></li>
            </ul>
          </div>

          {/* Col 4: Hours & Visiting */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-50 mb-6">
              Clinic Hours
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/70">
              <li className="flex justify-between py-1 border-b border-[#2d1c13]">
                <span>Monday – Friday:</span>
                <span className="text-cream-100 font-semibold">10:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-[#2d1c13]">
                <span>Saturday – Sunday:</span>
                <span className="text-cream-100 font-semibold">11:00 AM – 8:00 PM</span>
              </li>
            </ul>
            <div className="mt-6">
              <span className="inline-block text-[11px] text-luxury-gold uppercase tracking-wider font-semibold">
                ● Appointments Strictly by Reservation
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60">
          <p>© 2026 IVORY SALON by Anum Zubair. All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Youtube, href: "#" },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-[#1e130c] border border-[#3d271b] flex items-center justify-center text-cream-200 hover:text-white hover:border-luxury-gold transition-colors duration-200"
                  aria-label="Social Link"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white text-espresso-950 flex items-center justify-center hover:bg-cream-200 transition-colors duration-200 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
