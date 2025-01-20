import config from '$lib/config';
import { GITHUB_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { Repository } from '$lib/types';

const CACHE_DURATION = 5 * 60 * 1000;
const ABORT_TIMEOUT = 2000;

let cache: { data: Repository[]; createdAt: number } | null = null;

export const load: PageServerLoad = async () => {
  if (cache && (Date.now() - cache.createdAt < CACHE_DURATION)) {
    return { repositories: cache.data };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ABORT_TIMEOUT);

  try {
    const response = await fetch(`https://api.github.com/users/${config.social.github}/repos`, {
      signal: controller.signal,
      headers: GITHUB_TOKEN ? { Authorization: `Token ${GITHUB_TOKEN}` } : {}
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return { repositories: [] };
    }

    const data = await response.json();
    const dataFormatted: Repository[] = data
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

    cache = { data: dataFormatted, createdAt: Date.now() };

    return { repositories: dataFormatted };
  } catch (err) {
    clearTimeout(timeout);
    return { repositories: [] };
  }
};