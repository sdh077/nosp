import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from '$env/static/public'

export const load = (async ({ cookies, fetch, url, params }) => {
    const board = await fetch(`${PUBLIC_API_URL}/api/board/${params.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'X-Auth-Token': cookies.get('RRToken'),
        }
    })
        .then(async (data) => await data.json())
        .catch((e) => console.log('e1', e));
    return {
        board
    };
}) satisfies PageServerLoad;
