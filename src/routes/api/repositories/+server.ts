import config from '$lib/config';
import { json } from '@sveltejs/kit';
import { GITHUB_TOKEN } from '$env/static/private';

export async function GET() {
  const data = await fetch(`https://api.github.com/users/${config.social.github}/repos`, {
    headers: {
      Authorization: `Token ${GITHUB_TOKEN}`
    }
  });

  return json(await data.json());
}