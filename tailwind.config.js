/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // This is the crucial line that enables class-based dark mode
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}