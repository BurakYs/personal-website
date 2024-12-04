<script lang="ts">
  import config from '$lib/config';
</script>

<div>
  <div class="text-2xl font-bold flex items-center text-white mb-3">
    <i class="fas fa-book text-theme-color text-3xl mr-3"></i>
    Technologies
  </div>

  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    {#each config.technologies as tech}
      <div class="w-full duration-200 hover:scale-105">
        <div class="border border-border bg-foreground rounded-lg p-2">
          <div class="flex items-center">
            <img
              class="w-8 h-8 rounded-md mr-4"
              src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${tech.slug}/${tech.slug}-original.svg`}
              alt={tech.name}
            />
            <p class="text-sm font-bold text-white">{tech.name}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>