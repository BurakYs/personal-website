<script lang="ts">
  import config from '$lib/config';
</script>

<section class="mt-64 flex items-start relative">
  <div class="text-start relative">
    <h1 class="text-4xl sm:text-5xl font-bold mb-2">
      <span class="bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
        Hello, I'm {config.name}
      </span>
      👋
    </h1>
    <h2 class="text-lg font-semibold mb-2 text-white/60">
      {config.profession}
    </h2>
    <p class="text-gray-400 max-w-2xl mb-6">
      {config.about}
    </p>

    <a
      href="mailto:{config.contactEmail}"
      class="px-7 py-3 text-sm bg-white/10 hover:bg-white/20 duration-150 rounded-lg"
    >
      Contact Me
    </a>
  </div>
</section>