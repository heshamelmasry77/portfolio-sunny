/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    plugins: [],
    theme: {
        extend: {
            colors: {
                'mainBeige': '#F0EAE5',
                'lightBeige': '#F9F4F0',
                'medBeige': '#E1D4CA',
                'darkBrown': '#625347'
            },
            fontFamily: {
                mrsShe: ['Mrs Sheppards', 'sans-serif'],
                robotoC: ['Roboto Condensed', 'sans-serif'],
                secOne: ['Secular One, sans-serif'],
                shrink: ['Shrikhand, cursive', 'sans-serif']
            }
        },
    }
}
