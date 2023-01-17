/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'mainBeige': '#F0EAE5',
        'lightBeige': '#F9F4F0',
        'medBeige': '#E1D4CA',
        'darkBrown': '#625347'
      },
      fontFamily: {
        mrsShe: "Mrs Sheppards",
        robotoC: 'Roboto Condensed, sans-serif',
        secOne: 'Secular One, sans-serif',
        shrink: 'Shrikhand, cursive'
      }
    },
  },
  plugins: [],
}
