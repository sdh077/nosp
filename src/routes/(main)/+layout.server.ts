import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch, cookies }) => {
    const leagues = await fetch(`/api/league`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async (data) => await data.json())
        .catch((e) => console.log('e1', e));
    return {
        leagues,
    };
}) satisfies LayoutServerLoad;