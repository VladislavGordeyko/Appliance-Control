// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#343434',
        gray: {
          300: 'rgba(107, 114, 128)',
        },
        smoke: 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
