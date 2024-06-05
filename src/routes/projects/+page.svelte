<script>
    import config from '$config';

    const data = config.projects;
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
            {#each data as project}
                <a href={project.url || '?'}>
                    <div class="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.02] rounded-md cursor-pointer transition-all duration-200 shadow-2xl">
                        <div class="p-5">
                            <div class="flex justify-between items-center">
                                <div class="items-center">
                                    <img
                                            src={project.link}
                                            alt={project.name}
                                            width={400}
                                            height={200}
                                            class="rounded-md"
                                    />

                                    <div class="text-sm mt-2">
                                        <p class="font-bold text-black dark:text-white">
                                            {project.name}
                                        </p>
                                        <p class="text-black dark:text-white">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>