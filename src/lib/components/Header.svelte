<script lang="ts">
  import { page } from '$app/stores';
  import config from '$lib/config';

  const navbarItems = [
    { title: 'Home', href: '/', icon: 'fa-house' },
    { title: 'Projects', href: '/projects', icon: 'fa-blog' }
  ];
</script>

<nav class="p-4 sticky top-0 bg-background z-100 flex justify-between items-center">
  <a href="/" class="text-2xl font-bold text-gray-100">
    {config.name}
  </a>

  <div class="space-x-7 hidden sm:flex">
    {#each navbarItems as item}
      <a
        href={item.href}
        class="text-lg transition duration-300 {$page.url.pathname === item.href
          ? 'text-theme-color'
          : 'text-white/50 hover:text-white'}"
      >
        {item.title}
      </a>
    {/each}
  </div>

  <button
    class="bg-theme-color/75 font-medium p-2 w-32 transition duration-300 hover:bg-theme-color/60 rounded-md text-white"
  >
    <a href="https://discord.com/users/{config.social.discord}" target="_blank">
      Contact
    </a>
  </button>

  <div
    class="sm:hidden border border-border bg-foreground w-full h-16 px-10 py-2 flex justify-between text-gray-font fixed left-0 bottom-0 shadow-lg z-40 border-t border-gray-99"
  >
    {#each navbarItems as item}
      <a href={item.href}>
        <span
          class="px-2 py-1 cursor-pointer text-white text-sm rounded-md flex flex-col items-center text-center {$page.url.pathname === item.href && '!text-theme-color'}"
        >
          <i class="w-8 p-1 fa-regular {item.icon}"></i>
          <span class="mx-1">{item.title}</span>
        </span>
      </a>
    {/each}
  </div>
</nav>