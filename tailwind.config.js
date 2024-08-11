/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '6.5': '27px',
        '1.5': '1px'
      },
      boxShadow:{
        '2xx' : '0 4px 30px rgba(0, 0, 0, 0.1)',
        '2xy' : '0 4px 30px rgba(#ffff, #ffff, #ffff, 0.1)',
      },
    },
    fontFamily: {
      kaushan : ['Kaushan Script', 'cursive'],
      sourcecd :['Source Code Pro', 'monospace'],
    },
  },
  plugins: [],
}

