import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saphir: {
          blue: "#1b5bac",
          teal: "#00a99d",
          dark: "#2a2a2a",
          light: "#f8f9fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Montserrat", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Raleway", "system-ui", "sans-serif"],
        quote: ["var(--font-quote)", "Syne", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
