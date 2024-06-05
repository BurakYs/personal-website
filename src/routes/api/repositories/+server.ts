import config from '$config';
import { json } from '@sveltejs/kit';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const data = await fetch(`https://api.github.com/users/${config.social.github}/repos`, {
        headers: {
            Authorization: `Token ${process.env.GITHUB_TOKEN}`
        }
    });

    return json(await data.json());
}