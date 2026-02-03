/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'detail-*.html'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#6366f1', // Indigo-500
        'primary-light': '#818cf8', // Indigo-400
        'primary-dark': '#4f46e5', // Indigo-600
        'dark': '#0f172a',
        'secondary': '#64748b',
      },
      screens: {
        '2xl': '1320px',
        'sm': { 'max': '640px' }
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

