import type { PageServerLoad } from "../$types";
import { PUBLIC_API_URL } from '$env/static/public'
export const load = (async ({ cookies, fetch, params }) => {
    const league_id = params.id;
    const matches = await fetch(`${PUBLIC_API_URL}/api/match?league_id=${league_id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .then(res => res.data.filter(item => item.useYn).sort((a, b) => a.order > b.order ? -1 : 1))
        .catch((e) => console.log('e1', e));
    return {
        matches,
        id: params.id
    };
}) satisfies PageServerLoad;
