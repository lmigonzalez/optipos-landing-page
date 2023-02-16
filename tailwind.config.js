/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple: '#7858A6',
        white: '#ffffff',
        dark: '#222831',
        green: '#4ECCA3',
        gradientPurple: 'rgba(120, 88, 166, 1)',
        gradientDark: 'rgba(120, 88, 166, 0)'
      }
    },
  },
  plugins: [],
}