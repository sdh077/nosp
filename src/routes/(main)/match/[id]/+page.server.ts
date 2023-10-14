import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from '$env/static/public'

export const load = (async ({ cookies, fetch, url, params }) => {
    const match = await fetch(`${PUBLIC_API_URL}/api/match/${params.id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .then(res => res.data)
        .catch((e) => console.log('e1', e));
    const games = await fetch(`${PUBLIC_API_URL}/api/game?match_id=${params.id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .then(res => res.data
            .sort((a, b) => a.order > b.order ? -1 : 1)
            .sort((a, b) => a.type > b.type ? 1 : -1))
        .catch((e) => []);
    return {
        match,
        games,
    };
}) satisfies PageServerLoad;
