import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from '$env/static/public'

export const load = (async ({ cookies, fetch, url, params }) => {
    const matches = await fetch(`${PUBLIC_API_URL}/api/match/all`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .then(res => res.data.filter(item => item.useYn))
        .catch((e) => console.log('e1', e));
    return {
        matches
    };
}) satisfies PageServerLoad;
