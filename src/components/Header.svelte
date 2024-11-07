<script lang="ts">
  import { page } from "$app/stores";
  import config from "$lib/config";

  import themeStore from "$lib/stores/theme";

  let showBottomNavbar = $state(false);
  const isDark = $derived($themeStore === "dark");

  $effect(() => {
    updateOpen();
    window.addEventListener("resize", updateOpen);
    return () => window.removeEventListener("resize", updateOpen);
  });

  function updateOpen() {
    showBottomNavbar = window.innerWidth <= 640;
  }

  function switchTheme() {
    const newTheme = $themeStore === "light" ? "dark" : "light";
    themeStore.set(newTheme);
  }

  const navbarItems = [
    { title: "Home", href: "/", icon: "fa-house" },
    { title: "Projects", href: "/projects", icon: "fa-blog" },
  ];
</script>

<nav class="p-4 sticky top-0 bg-primary-light dark:bg-primary-dark z-100">
  <div class="flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <a href="/" class="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {config.name}
      </a>
      <button
        class="text-white bg-theme-color dark:bg-theme-color/75 w-10 p-1 rounded-md translation duration-300"
        onclick={switchTheme}
      >
        {#if isDark}
          <i class="fa-solid fa-sun-bright"></i>
        {:else}
          <i class="fas fa-moon"></i>
        {/if}
      </button>
    </div>
    <div class="space-x-7 hidden sm:flex">
      {#each navbarItems as item}
        <a
          href={item.href}
          class="text-lg translation duration-300 {$page.url.pathname ===
          item.href
            ? 'text-theme-color'
            : 'text-black/75 hover:text-theme-color dark:text-white/50 dark:hover:text-white'}"
        >
          {item.title}
        </a>
      {/each}
    </div>

    <div class="flex items-center">
      <button
        class="bg-theme-color dark:bg-theme-color/75 font-medium p-2 w-32 translation duration-300 hover:bg-theme-color/60 rounded-md text-white"
      >
        <a
          href={`https://discord.com/users/` + config.social.discordId}
          target="_blank"
        >
          Contact
        </a>
      </button>
    </div>

    {#if showBottomNavbar}
      <div
        class="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] w-full mx-auto h-16 px-10 py-2 flex justify-between text-gray-font left-0 fixed bottom-0 shadow-lg z-40 border-t border-gray-99"
      >
        {#each navbarItems as item}
          <a href={item.href.toLowerCase()}>
            <span
              class="px-2 py-1 cursor-pointer dark:text-white text-black text-sm rounded-md flex flex-col items-center text-center {$page
                .url.pathname === item.href && '!text-theme-color'}"
            >
              <i class={"w-8 p-1 fa-regular " + item.icon}></i>
              <span class="mx-1">{item.title}</span>
            </span>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</nav>
