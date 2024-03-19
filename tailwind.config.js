/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#35f3a3',
        
        secondary:'#0be58a'
      }
    },
  },
  plugins: [],
}
  