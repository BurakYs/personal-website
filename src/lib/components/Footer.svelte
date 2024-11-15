<script lang="ts">
  import config from "$lib/config";

  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-orange-500",
  ];

  let color = $state(colors[0]);

  let randomColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    color = colors[random];
  };

  let socials = [
    {
      alt: "Discord",
      href: `https://discord.com/users/${config.social.discordId}`,
    },
    {
      alt: "GitHub",
      href: `https://github.com/${config.social.github}`,
    },
  ];
</script>

<div class="p-5 mt-10 sm:mb-0 mb-16">
  <div class="w-full items-center h-12">
    <div class="flex justify-between items-center">
      <div></div>
      <div class="hidden sm:block">
        <span
          class="ml-3 hidden sm:block text-white items-center md:font-medium select-none"
        >
          Developed with
          <span
            class="cursor-pointer {color}"
            onclick={randomColor}
            onkeydown={randomColor}
            role="button"
            tabindex="0"
            aria-label="Change color"
          >
            <i class="fas fa-heart text-lg"></i>
          </span>
          by
          <a href={"https://github.com/" + config.social.github}>
            <span class="text-theme-color font-bold">
              {config.social.github}
            </span>
          </a>
        </span>
      </div>
      <div class="block sm:hidden">
        <span class="px-1 text-white items-center md:font-medium">
          Developed by
          <span class="text-theme-color font-bold">
            {config.name}
          </span>
        </span>
      </div>

      <div class="flex mr-4 text-md gap-x-5">
        {#each socials as social}
          <a href={social.href} target="_blank">
            <img
              src={`https://cdn.simpleicons.org/${social.alt.toLowerCase()}/FFFFFF`}
              alt={social.alt}
              class="w-6 h-6"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>