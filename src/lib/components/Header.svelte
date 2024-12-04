<script lang="ts">
  import config from '$lib/config';
</script>

<nav class="p-4 sticky top-0 bg-background z-[1000] flex justify-between items-center">
  <a href="/" class="text-2xl font-bold text-gray-100">
    {config.name}
  </a>

  <button
    class="bg-theme-color/75 font-medium p-2 w-32 transition duration-300 hover:bg-theme-color/60 rounded-md text-white"
  >
    <a href="https://discord.com/users/{config.social.discord}" target="_blank">
      Contact
    </a>
  </button>
</nav>