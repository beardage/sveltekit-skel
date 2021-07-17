const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/app.html', 'src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      amber: colors.amber,
      teal: colors.teal,
      primary: colors.amber,
      secondary: colors.teal
    },
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        'serif': ['Rosarivo', 'serif'],
        'sans': ['Open Sans', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
