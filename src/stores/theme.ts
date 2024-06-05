import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultTheme = 'dark';

function getTheme() {
    if (browser) return localStorage.getItem('theme') || defaultTheme;
    return defaultTheme;
}

const theme = writable(getTheme());

function switchTheme() {
    theme.update(current => {
        const newTheme = current === 'light' ? 'dark' : 'light';
        if (browser) {
            localStorage.setItem('theme', newTheme);
            document.body.className = newTheme;
        }

        return newTheme;
    });
}

export { theme, switchTheme };