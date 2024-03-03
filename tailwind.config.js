/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#124E70",
        'secondary':"#DCAA15",
        'grey':"#D9D9D9",
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
  plugins: [require('flowbite/plugin',"tw-elements/dist/plugin.cjs")],
  variants:{
    extend:{
      display:["focus-group"]
    }
  }

}

