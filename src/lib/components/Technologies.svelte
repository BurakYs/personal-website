<script lang="ts">
  import Section from '$components/Section.svelte';
  import config from '$lib/config';

  const baseURL = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';
</script>

<Section id="technologies" title="Technologies I Work With">
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
    {#each config.technologies as tech}
      <div
        class="flex justify-start items-center px-3 py-2 bg-linear-to-r from-white/[0.095] to-white/5 border border-white/5 hover:border-white/10 rounded-xl"
      >
        <img
          src="{baseURL}/{tech.slug}/{tech.slug}-{tech.variant || 'original'}.svg"
          alt={tech.name}
          class="size-7 mr-3"
        />
        <span class="font-medium duration-150">
          {tech.name}
        </span>
      </div>
    {/each}
  </div>
</Section>
