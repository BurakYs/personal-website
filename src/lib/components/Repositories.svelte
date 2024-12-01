<script lang="ts">
  import { onMount } from 'svelte';

  let data: Record<string, any>[] = [];

  onMount(async () => {
    const response = await fetch('/api/repositories');
    data = await response.json();
  });
</script>

<div>
  <div class="text-2xl font-bold flex items-center text-white mb-1">
    <i class="fab fa-github text-theme-color text-4xl mr-3"></i>
    Github Repositories
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    {#each data
      .filter((repo) => !repo.fork && ![repo.owner.login, ".github"].includes(repo.name))
      .slice(0, 6)
      .sort((a, b) => b.stargazers_count - a.stargazers_count) as repo}
      <a href={repo.html_url} target="_blank">
        <div class="h-full flex flex-col border border-border bg-foreground rounded-md cursor-pointer duration-200 hover:scale-[1.02] mt-2 px-2 md:pl-0">
          <div class="rounded-lg py-3 px-2 md:px-4 flex-grow">
            <h1 class="text-lg font-medium text-white">{repo.name}</h1>
            <p class="text-sm font-normal text-gray-400 mt-1">{repo.description}</p>
          </div>

          <div class="flex justify-end items-center mb-3 mr-2 gap-x-5">
            <div class="flex items-center">
              <i class="fas fa-star text-yellow-400 mr-1"></i>
              <span class="text-sm font-bold text-white">{repo.stargazers_count}</span>
            </div>

            <div class="flex items-center">
              <i class="fas fa-code-branch text-theme-color mr-1"></i>
              <span class="text-sm font-bold text-white">{repo.forks_count}</span>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>