module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.25)',
        'black-overlay': 'rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}