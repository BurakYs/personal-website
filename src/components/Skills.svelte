<script lang="ts">
  import config from '$lib/config';

</script>

<div class="mt-16">
    <div class="text-2xl font-bold flex items-center dark:text-white">
        <div class="w-10 h-10 rounded-full items-center flex justify-center mr-2">
            <i class="fas fa-book text-theme-color text-3xl"></i>
        </div>
        Technologies
    </div>
    <div class="flex flex-wrap mt-3">
        {#each config.technologies as tech}
            <div class="w-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] md:w-1/2 lg:w-1/3 mt-2 pr-2">
                <div class="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-lg p-2">
                    <div class="flex justify-between items-center">
                        <img class="w-8 h-8 rounded-md mr-4" src={`https://cdn.simpleicons.org/${tech.slug}`}
                             alt={tech.name} width="32" height="32">
                        <div class="text-sm justify-end">
                            <p class="font-bold text-black dark:text-white">{tech.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
