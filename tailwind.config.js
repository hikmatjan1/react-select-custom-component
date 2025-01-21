/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", // Barcha React fayllarini qamrab oladi
    "./src/index.css",               // CSS faylingizni ham qamrab oladi
    "./src/App.css",               // CSS faylingizni ham qamrab oladi
    "./node_modules/@tailwindcss/line-clamp/**/*.js", // Plugin uchun qo'shimcha yo‘l
  ],
  safelist: [
    "rotate-180",
    "pl-3",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Plaginni ulash
  ],
}

