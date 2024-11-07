import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const defaultTheme: Theme = 'dark';
const initialTheme: Theme = browser
  ? localStorage.getItem('theme') as Theme || defaultTheme
  : defaultTheme;

const theme = writable<Theme>(initialTheme);

export default theme;