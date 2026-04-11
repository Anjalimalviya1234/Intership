/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flat primary colors — all shades explicitly defined
        'primary': {
          DEFAULT: '#4338ca',
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        'secondary': {
          DEFAULT: '#f59e0b',
          500: '#f59e0b',
          600: '#d97706',
        },
        'accent': '#06b6d4',
        'dark': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow':       '0 0 40px rgba(99, 102, 241, 0.3)',
        'glow-lg':    '0 0 60px rgba(99, 102, 241, 0.4)',
        'card':       '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.6s ease-out forwards',
        'fade-in':     'fadeIn 0.5s ease-out forwards',
        'float':       'float 3s ease-in-out infinite',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  /*
   * safelist keeps all primary-* shades in the final CSS
   * even when used in dynamic class strings
   */
  safelist: [
    { pattern: /bg-primary-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-primary-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /border-primary-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /ring-primary-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /from-primary-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /to-primary-(50|100|200|300|400|500|600|700|800|900)/ },
    'bg-primary', 'text-primary',
    'bg-secondary', 'text-secondary',
    'shadow-glow', 'shadow-card', 'shadow-card-hover',
  ],
  plugins: [],
}