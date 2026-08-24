/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'detail-*.html',
    './dist/js/*.js'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'primary': '#6366f1',
        'primary-light': '#818cf8',
        'primary-dark': '#4f46e5',
        'dark': '#090d16',
        'dark-card': '#0f172a',
        'dark-surface': '#131c2e',
        'dark-border': '#1e293b',
        'secondary': '#64748b',
        'slate-subtle': '#94a3b8',
        'emerald-accent': '#10b981',
        'cyan-accent': '#06b6d4',
      },
      screens: {
        'xs': '420px',
        '2xl': '1320px',
      },
      boxShadow: {
        'subtle-glow': '0 0 25px -5px rgba(99, 102, 241, 0.15)',
        'emerald-glow': '0 0 20px -3px rgba(16, 185, 129, 0.2)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}



