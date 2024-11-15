/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'primary': '#101010',
                'theme-color': '#009DFF'
            }
        }
    },
    plugins: []
};