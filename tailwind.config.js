// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nusuk: {
          primary: '#B69D74',
          dark: '#1A1A1A',
          light: '#FAF7F2',
          accent: '#D4C4A8',
          gold: '#C8B273',
          'brown-light': '#E5DDD1',
          'brown-dark': '#8A7654',
        }
      },
    },
  },
  plugins: [],
}