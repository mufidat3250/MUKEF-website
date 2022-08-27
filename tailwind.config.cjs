/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green900:'#070903',
        gray900:'#2D2D2D',
        gray1000:'#1D2319',
        lighgray2:'rgba(255, 255, 255, 0.2)',
        lighgray4:'rgba(255, 255, 255, 0.5)',
        gray200:'#F0F0F0',
        gray300:'#D8D8D8',
        gray400:'#E7E6E6',
        gray500:'#D5D5D5',
        grayDark:'rgba(0, 0, 0, 0.3)',
        gray100:'#5F5F5F',
        gray1100:'#464646',
        gray1200:'#F0F0F0'
      }
    },
  },
  plugins: [],
}

