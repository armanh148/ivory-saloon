import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: "#120a06",
          900: "#1b110b",
          850: "#22150e",
          800: "#2d1c13",
          700: "#3d271b",
        },
        cream: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#EFE8DC",
          400: "#E5DCCE",
        },
        sand: {
          100: "#F4ECE1",
          200: "#EDE5D8",
          300: "#E3D7C4",
        },
        luxury: {
          gold: "#C5A059",
          brass: "#B38F48",
          charcoal: "#1A1A1A",
          muted: "#736F6A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
