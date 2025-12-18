/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* =====================================================
           BRAND CORE (your original palette — unchanged)
        ===================================================== */
        brand: {
          dark1: "#000008", // purest dark (midnight)
          dark2: "#080523", // deep navy surface
          blue1: "#010094", // deep logic blue
          blue2: "#261598", // prussian blue
          purple1: "#7548d2", // active purple
          purple2: "#a885ee", // highlight purple
          accent: "#9f6dff",
        },

        /* =====================================================
           DARK THEME TOKENS
        ===================================================== */
        dark: {
          bg: "#000008",          // page background
          surface: "#080523",     // cards / nav
          border: "#261598",      // subtle dividers

          text: {
            primary: "#f4f4ff",   // high contrast
            secondary: "#d9c7ff", // headings / emphasis
            muted: "#8a8aab",     // descriptions
          },

          node: {
            idle: "rgba(117,72,210,0.2)",
            active: "#7548d2",
            focus: "#a885ee",
            path: "#010094",
          },
        },

        /* =====================================================
           LIGHT THEME TOKENS (Ink & Paper)
        ===================================================== */
        light: {
          bg: "#FAF9F6",          // warm paper
          surface: "#FFFFFF",     // elevated paper
          subtle: "#F0F0F7",      // sidebar / panels
          border: "#E2E2F0",

          text: {
            primary: "#080523",   // deep navy ink
            secondary: "#261598", // prussian ink
            muted: "#8a8aab",
          },

          node: {
            idle: "rgba(38,21,152,0.1)",
            active: "#7548d2",
            focus: "#a885ee",
            path: "#010094",
          },
        },
      },

      /* =====================================================
         TYPOGRAPHY
      ===================================================== */
      fontFamily: {
        unbounded: ["Unbounded", "cursive"],
      },

      /* =====================================================
         SHADOWS (Glow only in dark mode)
      ===================================================== */
      boxShadow: {
        card: "0 4px 20px rgba(8,5,35,0.08)",
        "card-hover": "0 8px 30px rgba(8,5,35,0.12)",

        "node-glow": "0 0 16px rgba(117,72,210,0.45)",
        "node-focus": "0 0 24px rgba(168,133,238,0.75)",
      },

      /* =====================================================
         BACKGROUNDS
      ===================================================== */
      backgroundImage: {
        "grid-dark":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 40 L0 0 L40 0' fill='none' stroke='%23261598' stroke-width='0.5' stroke-opacity='0.15'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
