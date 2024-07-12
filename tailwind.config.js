/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT: '15px'
        }
      },
      colors:{
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
      },
      fontFamily:{
        primary:["Gilda Display", "serif"], //primary
        secondary:["Barlow", "sans-serif"], //seconadry
        condensed: ["Barlow Condensed", "sans-serif"] //tertiary
      },
      backgroundImage: {
        room: "url('./assets/images/room.jpg')"
      }
    },
  },
  plugins: [],
}