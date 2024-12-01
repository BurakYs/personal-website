/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'background': '#101010',
                'foreground': '#151516',
                'border': '#1A1A1C',
                'theme-color': '#009DFF'
            }
        }
    },
    plugins: []
};