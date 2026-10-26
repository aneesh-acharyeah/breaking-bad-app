// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#121212',
        'gray-800': '#1E1E1E',
        'gray-700': '#2D2D2D',
        'gray-600': '#3D3D3D',
        'gray-500': '#5C5C5C',
        'gray-400': '#9E9E9E',
        'gray-300': '#C2C2C2',
        'gray-200': '#E0E0E0',
        'gray-100': '#F5F5F5',
        'yellow-500': '#FFD700',
        'yellow-600': '#FFC600',
      },
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
