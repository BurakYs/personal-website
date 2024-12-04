import config from '$lib/config';
import { json } from '@sveltejs/kit';
import { GITHUB_TOKEN } from '$env/static/private';

const cacheDuration = 5 * 60 * 1000;
let cache: { data: any; timestamp: number } | null = null;

export async function GET() {
  const now = Date.now();

  if (cache && (now - cache.timestamp < cacheDuration)) {
    return json(cache.data);
  }

  const response = await fetch(`https://api.github.com/users/${config.social.github}/repos`, {
    headers: {
      Authorization: `Token ${GITHUB_TOKEN}`
    }
  });

  const data = await response.json();
  cache = { data, timestamp: now };

  return json(data);
}