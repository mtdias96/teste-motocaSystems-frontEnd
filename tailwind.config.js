/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: 'rgba(42, 35, 60, 1)',
        purple2:  'rgba(49, 45, 75, 1)',
        purple3:'rgba(140, 87, 255, 1)',
        gray1: 'rgba(202, 201, 205, 1)',
        white1: 'rgba(255, 255, 255, 1)',
        white2: 'rgba(231, 227, 252, 1)',
        blue1: 'rgba(59, 173, 251, 1)',
        green1: 'rgba(53, 69, 70, 1)',
        red1: 'rgba(255, 76, 81, 1)',


      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

