module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          'mdm': { 'raw': '(max-width: 1023px)' },
        }
    },
  },
  plugins: [],
}