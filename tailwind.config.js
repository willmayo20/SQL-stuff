/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          400: '#fbbf24',
          600: '#d97706',
        },
      },
    },
  },
  plugins: [],
}
