# 🌸 IVORY SALON by Anum Zubair (Gulshan Branch, Karachi)

A state-of-the-art, high-conversion luxury beauty salon and aesthetic clinic web application designed for **IVORY SALON by Anum Zubair**, located in Gulshan-e-Iqbal, Karachi. 

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, featuring bespoke luxury typography, smooth micro-interactions, an interactive Before & After slider, and an instant WhatsApp-integrated appointment booking flow.

---

## 🌟 Key Features

- **Luxury Aesthetics & Brand Identity**: Custom warm aesthetic palette (Espresso, Cream, Sand, and Luxury Gold) paired with editorial typography (*Cormorant Garamond* & *Plus Jakarta Sans*).
- **Full-Width Hero Section**: High-impact editorial imagery with direct call-to-action triggers and quick appointment booking.
- **Interactive Booking Modal**:
  - Modal form for choosing treatments, dates, and times.
  - One-click seamless redirection to **WhatsApp** (+92 345 2345055) pre-filled with client details and selected service.
- **Interactive Before & After Slider**: Interactive visual comparison component for clinical hair and skin transformations.
- **Comprehensive Treatments Catalog**:
  - Transparent pricing in PKR.
  - Tagged categories (e.g., Hair Transplant, HydraFacial, Chemical Peels, Wrinkle Smoothing).
  - Direct *"Book Consultation"* trigger per treatment.
- **Working Process (4-Step Journey)**: Consultation → Dermal Analysis → Couture Treatment → Aftercare.
- **Team & Artist Showcase**: Highlights Creative Director Anum Zubair and senior dermatologists/stylists.
- **Testimonials & Social Proof**: Highlighting verified bride and regular client reviews.
- **Beauty Journal & Blogs**: Skin prep rituals and hair couture advice articles.
- **Brand Partner Showcase**: Recognizable luxury brands (Kérastase, L'Oréal, Dyson, Huda Beauty, Dermalogica).
- **Floating WhatsApp FAB**: Always accessible for instant inquiries and VIP salon concierge bookings.
- **Fully Responsive & SEO-Ready**: Mobile-first architecture, semantic HTML5 tags, and smooth scrolling.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | React Framework with App Router & Server Components |
| **React 18** | UI Component Architecture |
| **TypeScript** | Strict type safety and maintainable codebase |
| **Tailwind CSS** | Utility-first styling with custom luxury design tokens |
| **Framer Motion** | Fluid animations and interactive micro-transitions |
| **Lucide React** | Minimalist icons for luxury UI elements |

---

## 📁 Project Structure

```text
ivory-salon/
├── app/
│   ├── globals.css          # Base CSS, typography variables & scroll styling
│   ├── layout.tsx           # Root layout with Google Fonts (Plus Jakarta & Cormorant)
│   └── page.tsx             # Main landing page assembling all luxury sections
├── components/
│   ├── AboutUs.tsx          # 5-photo mosaic story of Anum Zubair & salon philosophy
│   ├── BeforeAfter.tsx      # Interactive before & after comparison slider
│   ├── BookingModal.tsx     # Popup appointment form with WhatsApp forwarding
│   ├── BrandLogos.tsx       # Partner luxury brand logos
│   ├── CallToAction.tsx     # High-conversion closing banner
│   ├── Footer.tsx           # Contact info, timings, branch address & social links
│   ├── Hero.tsx             # Full-width luxury hero section
│   ├── MarqueeStrip.tsx     # Infinite ribbon with luxury announcements
│   ├── Navbar.tsx           # Sticky luxury header with mobile drawer
│   ├── NewsBlogs.tsx        # Aesthetic advice & bridal skin prep journal
│   ├── TeamMembers.tsx      # Anum Zubair and master aesthetician cards
│   ├── Testimonials.tsx     # Client ratings and feedback cards
│   ├── Treatments.tsx       # Service menu with prices in PKR
│   ├── WhatsAppFab.tsx      # Floating WhatsApp consultation button
│   ├── WhyUs.tsx            # Differentiators (Hygiene, imported products, certified artists)
│   └── WorkingProcess.tsx   # 4-step consultation-to-aftercare guide
├── lib/
│   └── data.ts              # Centralized data (Treatments, team, blogs, salon info)
├── public/                  # Static assets & clinical result images
├── next.config.js           # Next.js configuration (Unsplash remote image domains)
├── tailwind.config.ts       # Luxury color palette & marquee keyframes
├── tsconfig.json            # TypeScript configuration
└── package.json             # Scripts & dependencies
```

---

## 🎨 Design System & Color Palette

The project uses a custom-curated palette tailored for high-end beauty and aesthetic lounges:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| `espresso-950` | `#120A06` | Deepest dark espresso accent / text |
| `espresso-900` | `#1B110B` | Primary luxury dark background |
| `cream-100` | `#FAF7F2` | Page background (soft, warm white) |
| `cream-200` | `#F4EFE6` | Card background & secondary fills |
| `sand-200` | `#EDE5D8` | Border accents & delicate dividers |
| `luxury-gold` | `#C5A059` | Metallic gold highlights, badges, & icons |

### Typography
- **Headings & Accents**: `Cormorant Garamond` (Serif) — Elegant and editorial.
- **Body & UI**: `Plus Jakarta Sans` (Sans-Serif) — Clean, legible, and modern.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm** or **yarn** / **pnpm**

### 2. Installation
Clone or navigate to the project directory:
```bash
cd ivory-salon
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## ⚙️ Customization & Updating Content

All site copy, prices, contact details, and images can be updated in a single file:

👉 **[`lib/data.ts`](file:///c:/Users/Arman/Downloads/ivory-salon/lib/data.ts)**

- **Contact & Location Details**:
  ```ts
  export const SITE_INFO = {
    name: "IVORY SALON",
    tagline: "Glow With Expert Hair & Skin Care.",
    subTagline: "By Anum Zubair — Gulshan Branch, Karachi",
    phone: "+92 345 2345055",
    whatsapp: "923452345055",
    address: "Gulshan-e-Iqbal Block 4, Karachi, Pakistan",
    email: "concierge@ivorysalon.pk",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
  };
  ```
- **Treatments & PKR Pricing**: Update services, tags, and prices in the `TREATMENTS` array.
- **Team & Specialists**: Add or update staff under `team`.
- **Testimonials & Blogs**: Modify customer reviews or beauty blog entries in `testimonials` and `blogs`.

---

## 📍 Salon Concierge Information

- **Brand**: IVORY SALON by Anum Zubair
- **Location**: Gulshan-e-Iqbal Block 4, Karachi, Pakistan
- **Phone**: [+92 345 2345055](tel:+923452345055)
- **WhatsApp**: [+92 345 2345055](https://wa.me/923452345055)
- **Hours**: Monday to Sunday: 11:00 AM – 9:00 PM
