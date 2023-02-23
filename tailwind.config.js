const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: colors.indigo[900],
          accent: colors.gray[900]
        },
        background: {
          primary: colors.white,
          secondary: colors.gray[300],
          dark: colors.gray[900]
        },
        text: {
          primary: colors.black,
          customgray: colors.gray[600],
          secondary: colors.white
        },
        border:{
          light: colors.gray[500],
          dark: colors.gray[900],
          primary: colors.indigo[900]
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}