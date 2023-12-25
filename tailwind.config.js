/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
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
        'lightblue':"#dbeafe"
      },

      keyframes: {
        blinkingBg: {
            '0%, 100%': { backgroundColor: '#ef4444' },
            '50%': { backgroundColor: '#fee2e2' },
        }
    },
    animation: {
        blinkingBg: 'blinkingBg 2s ease-in-out infinite',
    }
    },
  },
  plugins: [require('flowbite/plugin'),],
}

