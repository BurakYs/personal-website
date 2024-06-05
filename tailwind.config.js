/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'back': {
                    DEFAULT: '#101010'
                },
                'main-theme': {
                    DEFAULT: '#009DFF'
                },
                'card': {
                    DEFAULT: '#151515'
                }
            }
        }
    },
    plugins: []
};