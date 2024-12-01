<script lang="ts">
  import config from '$lib/config';

  let socials = [
    {
      name: 'Discord',
      href: `https://discord.com/users/${config.social.discord}`
    },
    {
      name: 'GitHub',
      href: `https://github.com/${config.social.github}`
    }
  ];
</script>

<div class="p-5 mt-10 mb-16 sm:mb-0">
  <div class="w-full h-12 flex justify-end items-center">
    <div class="flex mr-4 text-md gap-x-5">
      {#each socials as social}
        <a href={social.href} target="_blank">
          <img
            src={`https://cdn.simpleicons.org/${social.name.toLowerCase()}/FFFFFF`}
            alt={social.name}
            class="w-6 h-6"
          />
        </a>
      {/each}
    </div>
  </div>
</div>