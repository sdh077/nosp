import type { LayoutServerLoad } from "./$types";
import { PUBLIC_API_URL } from '$env/static/public'

export const load = (async ({ fetch, cookies }) => {
    const leagues = await fetch(`${PUBLIC_API_URL}/api/league`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .then(res => res.data.sort((a, b) => a.order < b.order ? 1 : -1))
        .catch((e) => console.log('e1', e));
    return {
        leagues,
    };
}) satisfies LayoutServerLoad;