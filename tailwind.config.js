/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-theme0': '#EDF1F5',
        'blue-theme': '#4FA1C1',
        'gray-theme100': '#707070',
        'gray-theme200': '#4F4F4F',
        'gray-theme300': '#3A3A3A',
      }
    },
  },
  plugins: [],
}

