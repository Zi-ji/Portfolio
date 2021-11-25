const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors')
    }),
    colors: {
      background: '#edf2f4',
      primary: '#ef233c',
      textColor: '#2b2d42',
      linkHover: '#0084B8',
      background2: '#F3F4F7',
      svgColor: '#A9B0C6',
      special: '#81b29a',
      transparent: 'transparent'
    },
    inset: {
      '1/10': '10%',
      '1/20': '5%',
      '1/50': '2.5%',
      '1/5': '20%',
      '1/6': '15%',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%'
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        168: '42rem',
        196: '48rem',
        240: '60rem'
      },
      fill: ['hover'],
      fontFamily: {
        outfit: ['outfit', 'sans-serif']
      },
      animation: {
        movingWide: 'movingWide 20s ease-in-out infinite',
        moving: 'moving 12s ease-in-out infinite'
      },
      keyframes: {
        movingWide: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,80px,0)' },
        },
        moving: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,30px,0)' },
        },
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
