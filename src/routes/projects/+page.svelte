<script lang="ts">
  import config from '$lib/config';
</script>

<div>
  <div class="text-3xl font-bold flex items-center text-white mt-16 mb-1">
    Projects
  </div>

  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {#each config.projects as project}
        <a href={project.url || "?"} target="_blank" class="h-full border border-border bg-foreground rounded-md duration-200 hover:scale-[1.02]">
          <img src={project.thumbnail} alt={project.name} class="rounded-md aspect-video p-1"/>
          <div class="text-sm p-3">
            <h1 class="font-bold text-white text-base">{project.name}</h1>
            <p class="text-gray-400">{project.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>