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
          primary: '#023020',
          dark: '#059669',
          darker: '#023020'
        }
      }
    }
  },
  plugins: []
};

