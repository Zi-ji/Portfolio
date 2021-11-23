const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      background: '#FAF9F0'
    }),
    colors: {
      primary: '#CE4B27',
      textColor: '#27476E',
      linkHover: '#0084B8',
      background2: '#F5F2E0',
      transparent: 'transparent'
    },
    screens: {
      '3xl': { max: '1800px' },
      '2xl': { max: '1535px' },
      xl: { max: '1281px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        168: '42rem',
        196: '48rem',
        240: '60rem'
      },
      fontFamily: {
        outfit: ['outfit', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
