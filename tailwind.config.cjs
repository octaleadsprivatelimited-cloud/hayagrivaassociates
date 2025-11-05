/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2c5f2d',
          dark: '#059669',
          darker: '#2c5f2d'
        }
      }
    }
  },
  plugins: []
};

