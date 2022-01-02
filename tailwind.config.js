module.exports = {
  // purge: [],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman'
      }
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [],
}
