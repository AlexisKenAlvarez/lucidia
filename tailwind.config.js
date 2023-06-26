/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Clash'],
        secondary: ['Bai Jamjuree'],
      },
      colors: {
        bl: '#0ED4FF',
        cyan: '#0ED4FF',
        bg: '#010102'
      }
    },
  },
  plugins: [],
}

