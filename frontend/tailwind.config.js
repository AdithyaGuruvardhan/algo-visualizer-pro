export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue1: "#000008",
        darkblue2: "#080523",
        lightblue1: "#010094",
        lightblue2: "#261598",
        lightblue3: "#7548d2",
        textPrimary: "#d9c7ff",
        textSecondary: "#b8b8d9",
        accent: "#9f6dff",
      },
      fontFamily: {
        unbounded: ["Unbounded", "cursive"],
      }
    }
  },
  plugins: [],
}
