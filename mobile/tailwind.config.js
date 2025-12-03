// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        slop: {
           bg: '#0F0C29',
           dark: '#191934', 
           purple: '#BB3DF6',
           blue: '#00C2FF',
           pink: '#FF3A81',
        }
      }
    },
  },
  plugins: [],
}
