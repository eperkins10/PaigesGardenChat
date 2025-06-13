/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e9ede4',
          200: '#d4dbca',
          300: '#b8c3a7',
          400: '#9ba985',
          500: '#7d8e6a',
          600: '#627153',
          700: '#4e5a43',
          800: '#404a37',
          900: '#363f2f',
        },
        forest: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd0a8',
          400: '#5bb57d',
          500: '#3a9b5c',
          600: '#2d7d47',
          700: '#26653a',
          800: '#225130',
          900: '#1e4329',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
};