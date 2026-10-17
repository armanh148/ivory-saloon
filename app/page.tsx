"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MarqueeStrip from "@/components/MarqueeStrip";
import Treatments from "@/components/Treatments";
import BeforeAfter from "@/components/BeforeAfter";
import WorkingProcess from "@/components/WorkingProcess";
import TeamMembers from "@/components/TeamMembers";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import NewsBlogs from "@/components/NewsBlogs";
import BrandLogos from "@/components/BrandLogos";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import BookingModal from "@/components/BookingModal";

export default function Page() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("HAIR TRANSPLANT");

  const handleOpenBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    }
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900 selection:bg-[#1b110b] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. About Section ("KNOW MORE ABOUT LUXEZAI") */}
        <AboutUs onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Marquee Appointment Ribbon */}
        <MarqueeStrip onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Treatments ("OUR TREATMENTS") */}
        <Treatments onSelectTreatment={(treatment) => handleOpenBooking(treatment)} />

        {/* 6. Before & After */}
        <BeforeAfter />

        {/* 7. Working Process */}
        <WorkingProcess onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Team Members */}
        <TeamMembers onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Why Luxeza ("WHY LUXEZAI?") */}
        <WhyUs />

        {/* 10. Testimonials ("PEOPLE'S OBSERVATION") */}
        <Testimonials />

        {/* 11. News & Blogs */}
        <NewsBlogs />

        {/* 12. Brand Partners */}
        <BrandLogos />

        {/* 13. Call To Action ("TRANSFORM YOUR HAIR & SKIN") */}
        <CallToAction onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. WhatsApp Floating Button */}
      <WhatsAppFab />

      {/* 16. Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedTreatment={selectedTreatment}
      />
    </div>
  );
}
