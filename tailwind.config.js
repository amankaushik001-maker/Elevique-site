/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#006472",
          mint: "#39FFD5",
          dark: "#0b0b0b",
        }
      },
      boxShadow: {
        neon: "0 0 40px rgba(57,255,213,0.25)",
      }
    },
  },
  plugins: [],
}
