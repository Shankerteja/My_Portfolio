/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#f0fdff",
        secondary: "#0e7490",
        accent: "#06b6d4",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom, rgba(6, 182, 212, 0.1), rgba(8, 145, 178, 0.2))",
      },
    },
  },
  plugins: [],
}