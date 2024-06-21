<script lang="ts">
    import { onMount } from 'svelte';

    let data: Record<string, any>[] = [];
    onMount(async () => {
        const response = await fetch('/api/repositories');
        data = await response.json();
    });
</script>

<div class="w-full h-full">
    <div class="text-2xl font-bold flex items-center text-black dark:text-white">
        <div class="w-10 h-10 items-center flex justify-center mr-2">
            <i class="fab text-theme-color z-index-2 fa-github text-4xl"></i>
        </div>
        Github Repositories
    </div>

    <div class="w-full flex flex-wrap gap-3 mt-3">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {#each data
                    .filter(repo => !repo.fork && ![repo.owner.login, '.github'].includes(repo.name))
                    .slice(0, 6)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count) as repo}
                    <a href={repo.html_url} target="_blank" class="w-full">
                        <div class="w-full h-full flex flex-col border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-md cursor-pointer hover:scale-[1.02] mt-2 pr-2">
                            <div class="rounded-lg px-2 md:px-4 lg:px-5 p-2 flex-grow">
                                <h1 class="text-lg font-medium text-black dark:text-white">
                                    {repo.name}
                                </h1>
                                <p class="text-sm font-normal text-gray-800 dark:text-white mt-2">
                                    {repo.description}
                                </p>
                            </div>
                            <div class="flex justify-end items-center mb-3 mr-2 gap-x-5">
                                <div class="flex items-center">
                                    <i class="fas fa-star text-yellow-400 mr-1"></i>
                                    <span class="text-sm font-bold text-gray-800 dark:text-white align-middle">
                                        {repo.stargazers_count}
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-code-branch text-theme-color mr-1"></i>
                                    <span class="text-sm font-bold text-gray-800 dark:text-white align-middle">
                                        {repo.forks_count}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
</div>