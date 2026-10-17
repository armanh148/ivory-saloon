import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "IVORY SALON by Anum Zubair | Gulshan Branch Karachi",
  description: "Experience world-class bridal makeovers, couture hair restoration, aesthetic facials, and nail spa at Ivory Salon Gulshan Branch, Karachi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="bg-cream-100 text-luxury-charcoal font-sans antialiased selection:bg-espresso-900 selection:text-cream-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
