import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from '$env/static/public'

export const load = (async (props) => {
    console.log('here', props.url.href)
}) satisfies PageLoad;
