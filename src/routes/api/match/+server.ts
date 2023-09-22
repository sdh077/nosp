import pg from 'pg';
import { json } from '@sveltejs/kit';
import { POSTGRES_URL } from '$env/static/private';
export async function GET({ url, params }) {
	try {
		const { Client } = pg;

		let client = new Client({
			connectionString: POSTGRES_URL + '?sslmode=require&max=2000'
		});
		await client.connect();
		const league_id = url.searchParams.get('league_id')
		const res = await client.query(
			`
			SELECT * from match WHERE league_id = ${league_id};
			`
		);
		await client.end();
		client = null;
		return json(res.rows);
	} catch (e) {
		return json([]);
	}
}
// export async function POST({ request }) {
// 	console.log('post');
// 	// const body = await request.json();
// 	const { Client } = pg;
// 	const client = new Client({
// 		connectionString: POSTGRES_URL + '?sslmode=require'
// 	});
// 	await client.connect();
// 	for (const [_, body] of Object.entries(docs).reverse()) {
// 		const res = await client.query(
// 			`
// 			INSERT INTO public.pr (
// 				title, content, hashtags, image,  subtitle)
// 				VALUES ($1, $2, $3, $4, $5)
// 		`,
// 			[body.title, body.content, [], '', body.subtitle]
// 		);
// 		console.log(res);
// 	}
// 	await client.end();
// 	return json({});
// }
export async function POST({ request }) {
	const body = await request.json();
	const { Client } = pg;
	const client = new Client({
		connectionString: POSTGRES_URL + '?sslmode=require'
	});
	await client.connect();
	const res = await client.query(
		`
		INSERT INTO public.pr (
			title, content, hashtags, image,  subtitle, "firstPublishedDate")
			VALUES ($1, $2, $3, $4, $5, $6)
	`,
		[
			body.title,
			body.content,
			body.hashtags.split(','),
			body.image,
			body.subtitle,
			body.firstPublishedDate
		]
	);
	await client.end();
	return json(res.rows);
}
