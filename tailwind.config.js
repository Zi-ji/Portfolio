const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'background': '#FAF9F0',
    }),
    colors: {
      primary: '#27476E',
      secondary: '#CE4B27',
      light: '#626793',
      transparent: 'transparent',
      test: 'gray',
      background2: '#F5F2E0'
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1281px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '168': '42rem',
        '196': '48rem',
        '240': '60rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
