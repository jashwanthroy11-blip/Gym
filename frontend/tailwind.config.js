/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 25px 75px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
