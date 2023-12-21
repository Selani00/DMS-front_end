/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#1E65A3",
        'secondary':"#DCAA15",
        'grey':"#D3D1D1",
        'dark':"#373B3F",
        'linear':"#949079",
        'white':"#FFFFFF",
        'black':"#000000",
      }
    },
  },
  plugins: [],
}

