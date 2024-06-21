<script>
    import config from '$config';
</script>

<div class="mt-10 mb-10 p-4">
    <h1 class="text-3xl font-bold text-black dark:text-white">
        Projects
    </h1>
    <p class="text-black dark:text-white mt-3">
        Here are some of my projects that I have worked on.
    </p>
    <div class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {#each config.projects as project}
                <a href={project.url || '?'}>
                    <div class="h-full border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.02] rounded-md cursor-pointer transition-all duration-200 shadow-2xl p-5">
                        <div class="flex justify-between items-center">
                            <div class="items-center">
                                <img
                                        src={project.link}
                                        alt={project.name}
                                        class="rounded-m aspect-video"
                                />

                                <div class="text-sm mt-3">
                                    <h1 class="font-bold text-black dark:text-white text-base">
                                        {project.name}
                                    </h1>
                                    <p class="text-black dark:text-white">
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