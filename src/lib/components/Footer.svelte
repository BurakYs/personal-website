<script lang="ts">
  import config from '$lib/config';

  const socials = [
    {
      name: 'GitHub',
      href: `https://github.com/${config.social.github}`
    },
    {
      name: 'Discord',
      href: `https://discord.com/users/${config.social.discord}`
    },
    {
      name: 'Gmail',
      href: `mailto:mail@${config.contactEmail}`
    }
  ];
</script>

<footer class="flex justify-end container mx-auto p-6">
  {#each socials as social}
    <a
      href={social.href}
      class="p-3 rounded-full"
      target="_blank"
    >
      <img
        src="https://cdn.simpleicons.org/{social.name.toLowerCase()}/FFFFFF"
        alt={social.name}
        class="size-6"
      />
    </a>
  {/each}
</footer>