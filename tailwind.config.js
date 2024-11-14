/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          500: '#414141',
          400: '#374151',
          600: '#2E2E2E',
        },
      },
    },
  },
  plugins: [],
};
