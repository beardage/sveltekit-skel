const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/app.html', 'src/**/*.svelte'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      cyan: colors.cyan,
      primary: colors.gray,
      secondary: colors.cyan
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
