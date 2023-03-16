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
    extend: {
      boxShadow: {
        cxl: '0 3px 40px rgba(36, 36, 36, .1)'
      },
      backgroundImage: {
        'bg-banner1': "url('/src/assets/images/Banner/cup-coffee-table.jpg')",
        'bg-banner2': "url('/src/images/Banner/DrillMachine.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
