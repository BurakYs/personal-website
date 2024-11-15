<script lang="ts">
  import config from "$lib/config.js";
</script>

<div class="mt-10 mb-10 p-4">
  <h1 class="text-3xl font-bold text-white">Projects</h1>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {#each config.projects as project}
        <a href={project.url || "?"}>
          <div
            class="h-full border-[1px] border-[#1a1a1c] bg-[#151516] hover:scale-[1.02] rounded-md cursor-pointer transition-all duration-200 shadow-2xl"
          >
            <div class="flex justify-between items-center">
              <div class="items-center">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  class="rounded-m aspect-video p-1"
                />

                <div class="text-sm p-3">
                  <h1 class="font-bold text-white text-base">
                    {project.name}
                  </h1>
                  <p class="text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>