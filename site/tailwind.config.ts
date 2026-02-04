import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saphir: {
          blue: "#1b5bac",
          dark: "#2a2a2a",
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
