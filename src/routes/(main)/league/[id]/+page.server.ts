import type { PageServerLoad } from "../$types";
export const load = (async ({ cookies, fetch, params }) => {
    const league_id = params.id;
    const matches = await fetch(`/api/match?league_id=${league_id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .catch((e) => console.log('e1', e));
    return {
        matches,
    };
}) satisfies PageServerLoad;
