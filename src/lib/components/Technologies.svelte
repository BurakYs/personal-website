<script lang="ts">
  import Section from '$components/Section.svelte';
  import config from '$lib/config';
</script>

<Section id="technologies" title="Technologies I Work With">
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
    {#each config.technologies as tech}
      <div
        class="group flex justify-start items-center px-3 py-2 bg-gradient-to-r from-white/[0.07] to-white/5 border border-white/5 rounded-xl"
      >
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/{tech.slug}/{tech.slug}-original.svg"
          alt={tech.name}
          class="size-7 mr-3"
        />
        <span class="font-medium group-hover:text-gray-300 duration-150">
          {tech.name}
        </span>
      </div>
    {/each}
  </div>
</Section>
