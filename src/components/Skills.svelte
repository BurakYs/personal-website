<script lang="ts">
    import config from '$config';

    let skills = config.skills.filter(x => x.show);
</script>

<div class="mt-16">
    <div class="text-2xl font-bold flex items-center dark:text-white">
        <div class="w-10 h-10 rounded-full items-center flex justify-center mr-2">
            <i class="fas fa-book text-main-theme text-3xl"></i>
        </div>
        Technologies
    </div>
    <div class="flex mt-5 flex-wrap">
        {#each skills as skill}
            <div class="w-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] md:w-1/2 lg:w-1/3 mt-2 pr-2">
                <div class="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-lg p-2">
                    <div class="flex justify-between items-center">
                        <img class="w-8 h-8 rounded-md mr-4" src={skill.src} alt={skill.name} width="32" height="32">
                        <div class="text-sm justify-end">
                            <p class="font-bold text-black dark:text-white">{skill.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
