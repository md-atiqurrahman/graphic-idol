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

          base: "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'bg-banner1': "url('/src/assets/images/cup-coffee-table.jpg')",
        'bg-banner2': "url('/src/images/Banner/DrillMachine.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
