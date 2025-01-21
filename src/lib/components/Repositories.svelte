<script lang="ts">
  import Section from '$components/Section.svelte';

  import GitBranchIcon from 'lucide-svelte/icons/git-branch';
  import GitForkIcon from 'lucide-svelte/icons/git-fork';
  import StarIcon from 'lucide-svelte/icons/star';

  import { onMount } from 'svelte';
  import config from '$lib/config';

  type Repository = {
    name: string;
    description: string;
    language: string;
    url: string;
    stars: number;
    forks: number;
  };

  const languageColors: Record<string, string> = {
    typescript: '#3178C6',
    javascript: '#F7DF1E',
    html: '#E34C26',
    css: '#1572B6',
    scss: '#CC6699',
    svelte: '#FF3E00',
    vue: '#4FC08D',
    react: '#61DAFB',
    angular: '#DD0031',
    python: '#3776AB'
  };

  let repositoryPromise = $state<Promise<Repository[]>>();

  onMount(() => {
    repositoryPromise = fetchRepositories();
  });

  async function fetchRepositories(): Promise<Repository[]> {
    const response = await fetch(`https://api.github.com/users/${config.social.github}/repos`);
    const data = await response.json();

    return data
      .filter((repo: any) => !repo.fork && ![repo.owner.login, '.github'].includes(repo.name))
      .slice(0, 6)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count
      }));
  }
</script>

<Section id="repositories" title="GitHub Repositories">
  {#await repositoryPromise}
    <p>Loading...</p>
  {:then repositories}
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each repositories ?? [] as repo}
        <div
          class="bg-gradient-to-r from-white/[0.095] to-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 duration-150"
        >
          <div class="flex flex-col">
            <div>
              <h3 class="font-semibold mb-1 flex items-center">
                {repo.name}
              </h3>
              <p class="text-sm text-gray-400 mb-4">{repo.description}</p>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-white/10">
              <div class="flex items-center space-x-3 text-xs">
                <span class="flex items-center text-white/60">
                  <span
                    class="size-2 rounded-full mr-1.5"
                    style="background-color: {languageColors[repo.language?.toLowerCase()] || '#CBCBCB'}"
                  ></span>
                  {repo.language}
                </span>
                <span class="flex items-center text-white/60">
                  <StarIcon class="size-3 mr-1"/>
                  {repo.stars}
                </span>
                <span class="flex items-center text-white/60">
                  <GitForkIcon class="size-3 mr-1"/>
                  {repo.forks}
                </span>
              </div>

              <a
                href={repo.url}
                class="flex items-center text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 duration-150 rounded-lg"
                target="_blank"
              >
                <span class="mr-1.5">View</span>
                <GitBranchIcon class="size-3"/>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:catch error}
    <p class="text-red-500">
      Failed to fetch repositories. Please try again later.
    </p>
  {/await}
</Section>