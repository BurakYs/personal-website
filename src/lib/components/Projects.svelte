<script lang="ts">
  import config from '$lib/config';
  import Slider from '$lib/components/Slider.svelte';
  import draggingStore from '$lib/stores/dragging';

  function handleClick(url: string) {
    if ($draggingStore) return;
    window.open(url, '_blank');
  }
</script>

<div>
  <div class="text-3xl font-bold flex items-center text-white mb-3">
    <i class="fas fa-diagram-project text-theme-color text-2xl mr-3"></i>
    Projects
  </div>

  <Slider>
    {#each config.projects as project}
      <a
        href={project.url}
        target="_blank"
        onclick={(e) => {e.preventDefault(); handleClick(project.url)}}
        class="border border-border bg-foreground hover:bg-foreground/50 duration-200 rounded-md sm:max-w-72 max-w-64 flex-shrink-0"
        draggable="false"
      >
        <img src={project.thumbnail} alt={project.name} class="rounded-md aspect-video px-1 pt-1 select-none pointer-events-none"/>
        <div class="p-3 select-none">
          <h1 class="font-bold text-white text-sm sm:text-base">{project.name}</h1>
          <p class="text-gray-400 text-xs sm:text-sm">{project.description}</p>
        </div>
      </a>
    {/each}
  </Slider>
</div>
