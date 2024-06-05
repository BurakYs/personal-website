<script lang="ts">
    import { onMount } from 'svelte';
    import { switchTheme, theme } from '$stores/theme';
    import { get } from 'svelte/store';
    import { page } from '$app/stores';
    import config from '$config';

    let isOpen = false;
    const updateOpen = () => {
        isOpen = window.innerWidth <= 640;
    };

    let isDark: boolean;
    $: isDark = $theme === 'dark';
    const changeThemeClass = (theme: string) => {
        const rootElement = document.documentElement;
        const themeToRemove = theme === 'dark' ? 'light' : 'dark';
        rootElement.classList.remove(themeToRemove);
        rootElement.classList.add(theme);
    };

    onMount(() => {
        changeThemeClass(get(theme));
        theme.subscribe(changeThemeClass);
        updateOpen();
        window.addEventListener('resize', updateOpen);

        return () => {
            window.removeEventListener('resize', updateOpen);
        };
    });
</script>

<nav class="p-4">
    <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <a href="/" class="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {config.title}
            </a>
            <button
                    class="text-white bg-main-theme dark:bg-main-theme/75 w-10 p-1 rounded-md translation duration-300"
                    on:click={switchTheme}
            >
                {#if isDark}
                    <i class="fa-solid fa-sun-bright"></i>
                {:else}
                    <i class="fas fa-moon"></i>
                {/if}
            </button>
        </div>
        <div class="space-x-7 hidden sm:flex">
            {#each config.titles as title}
                <a
                        href={title.url.toLowerCase()}
                        class="text-lg font-light translation duration-300 {$page.url.pathname === title.url ? 'text-main-theme': 'text-black/75 hover:text-main-theme dark:text-white/50 dark:hover:text-white'}"
                >
                    {title.title}
                </a>
            {/each}
        </div>

        <div class="flex items-center">
            <button class="bg-main-theme dark:bg-main-theme/75 font-medium p-2 w-32 translation duration-300 hover:bg-main-theme/60 rounded-md text-white">
                <a href={`https://discord.com/users/` + config.social.discordId} target="_blank">
                    Contact
                </a>
            </button>
        </div>

        {#if isOpen}
            <div class="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] w-full mx-auto h-16 px-10 py-2 flex justify-between text-gray-font left-0 fixed bottom-0 shadow-lg z-40 border-t border-gray-99">
                {#each config.titles as title}
                    <a href={title.url.toLowerCase()}>
                        <span class="px-2 py-1 cursor-pointer hover:bg-back/25 dark:text-white text-black dark:hover:bg-main-theme/25 text-sm rounded-md font-light flex flex-col items-center text-center">
                            <i class={'w-8 p-1 fa-regular ' + title.icon}></i>
                            <span class="mx-1 font-roboto">{title.title}</span>
                        </span>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</nav>