const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },

    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },

    extend: {},
  },
  plugins: [],
}
