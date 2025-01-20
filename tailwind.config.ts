import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
        xs: '425px'
      }
    }
  },

  plugins: []
} satisfies Config;
