/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-dark': '#101010',
                'primary-light': '#F3F4F6',
                'theme-color': '#009DFF',
                'card': '#151515'
            }
        }
    },
    plugins: []
};