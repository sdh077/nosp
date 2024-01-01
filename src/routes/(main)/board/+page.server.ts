import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from '$env/static/public'

export const load = (async ({ cookies, fetch, url, params }) => {
    const pageNo = Number(url.searchParams.get('page') || '1')
    const size = 5
    const boards = await fetch(`/api/board/mine?page=${pageNo - 1}&size=${size}`, {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .catch((e) => console.log('e1', e));
    return {
        boards
    };
}) satisfies PageServerLoad;
