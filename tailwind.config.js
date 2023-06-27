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
        bg: '#010102',
        lavender: '#9786FF',
        grn: '#C0FF0E',
        lightpurple: '#e4d3fe',
        gry: '#26272B'
      },
      boxShadow: {
        world: '0px -84px 147px -9px rgba(0,0,0,0.78) inset',
        worldHover: '0px -99px 400px 51px rgba(193,255,0,0.97) inset'
      }
    },
  },
  plugins: [],
}

