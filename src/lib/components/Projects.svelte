<script lang="ts">
  import Section from '$components/Section.svelte';
  import GithubIcon from 'lucide-svelte/icons/github';
  import ExternalLinkIcon from 'lucide-svelte/icons/external-link';

  import config from '$lib/config';
</script>

<Section id="projects" title="Projects">
  <div class="grid gap-8 sm:grid-cols-2 grid-cols-1 lg:flex lg:flex-wrap">
    {#each config.projects as project}
      <div
        class="bg-gradient-to-br from-white/[0.095] to-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 duration-150 flex flex-col md:w-[22rem]"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          class="size-full object-cover h-40"
        />

        <div class="p-4 flex flex-col flex-grow">
          <h3 class="text-lg font-semibold mb-2">{project.title}</h3>
          <p class="text-sm text-gray-400 mb-4">{project.description}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tags as tag}
              <span class="px-2 py-1 text-xs bg-white/20 rounded-xl">{tag}</span>
            {/each}
          </div>

          <div class="flex items-center gap-x-3 pt-4 border-t border-white/10 mt-auto">
            {#if project.url}
              <a
                href={project.url}
                class="flex items-center text-sm text-white/80 hover:text-white duration-150"
                target="_blank"
              >
                <ExternalLinkIcon class="size-4 mr-1.5"/>
                View Project
              </a>
            {/if}

            {#if project.repository}
              <a
                href={project.repository}
                class="inline-flex items-center text-sm text-white/80 hover:text-white duration-150 {project.url && 'border-l border-white/10 pl-3'}"
                target="_blank"
              >
                <GithubIcon class="size-4 mr-1.5"/>
                View on GitHub
              </a>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</Section>