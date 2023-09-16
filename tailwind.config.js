/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'emerald': {
          50: '#EFF6EC',
          100: '#D9E9D8',
          200: '#B3D0B3',
          300: '#8CB78D',
          400: '#669E68',
          500: '#4D804F',
          600: '#3C603F',
          700: '#2A402F',
          800: '#18201F',
          900: '#06000F',

        },
        'gray': {
          50: '#e5e5e5',
          100: '#EEEEEE',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#212121',
          900: '#000000',

        },

      },
      fontFamily: {
        body: ['Nunito', 'sans-serif','lato'],
      }
    },
  },
  plugins: [],
}

