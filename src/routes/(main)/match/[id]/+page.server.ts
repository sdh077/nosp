import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies, fetch, url, params }) => {
    const match = await fetch(`/api/match/${params.id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .catch((e) => console.log('e1', e));
    const games = await fetch(`/api/match/${params.id}/game`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .catch((e) => console.log('e1', e));
    return {
        match,
        games
    };
}) satisfies PageServerLoad;
