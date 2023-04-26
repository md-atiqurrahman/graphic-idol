/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        graphictheme: {

          primary: "#193285",

          secondary: "#ff4040",

          accent: "#d8edfe",

          neutral: "#000000",
        },
      },
    ],
  },
  theme: {
    fontFamily:{
      Poppins: ['Poppins', 'sans-serif'],
      MerriWeather: ['Merriweather','serif']
    },
    extend: {
      boxShadow: {
        cxl: '0 3px 40px rgba(36, 36, 36, .1)'
      },
      backgroundImage: {
        'bg-banner1': "url('/src/assets/images/Banner/cup-coffee-table.jpg')",
        'bg-banner2': "url('/src/images/Banner/DrillMachine.jpg')",
        'bg-shape1': "url('/src/assets/images/Pricing/LogoDesign/shape-1.png')",
        'bg-shape2': "url('/src/assets/images/Pricing/LogoDesign/shape-2.png')",
        'bg-shape3': "url('/src/assets/images/Pricing/LogoDesign/shape-3.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}
