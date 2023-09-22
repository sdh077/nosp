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
		const match_id = params.id
		const res = await client.query(
			`
			SELECT * from game
			${match_id ? `WHERE match_id = ${match_id}` : ''}
			`
		);
		await client.end();
		client = null;
		return json(res.rows);
	} catch (e) {
		return json([]);
	}
}

export async function POST({ request, params }) {
	try {
		const body = await request.json();
		const { Client } = pg;
		const client = new Client({
			connectionString: POSTGRES_URL + '?sslmode=require'
		});
		await client.connect();
		const game = body.game
		console.log(game)
		const res = await client.query(
			`
			INSERT INTO public.game(
				title, type, "order", link, match_id)
				VALUES ($1, $2, $3, $4, ${params.id})
	`,
			[
				game.title,
				game.type,
				game.order,
				game.link,
			]
		);
		await client.end();
		return json(res.rows);
	} catch (e) {
		return json([]);
	}
}

export async function PUT({ request, params }) {
	try {
		const { Client } = pg;
		const client = new Client({
			connectionString: POSTGRES_URL + '?sslmode=require'
		});
		const body = await request.json();
		await client.connect();
		const res = await client.query(
			`
		UPDATE public.pr 
		SET 
			title = $1,
			subtitle = $2,
			hashtags = $3,
			content = $4,
			image = $5,
			"firstPublishedDate" = $6
		WHERE id=${params.id}
		`,
			[
				body.title,
				body.subtitle,
				body.hashtags.split(','),
				body.content,
				body.image,
				body.firstPublishedDate
			]
		);
		await client.end();
		return json(res.rows);
	} catch (e) {
		console.log(e);
		return e;
	}
}
export async function DELETE({ request, params }) {
	console.log('delete');
	try {
		const { Client } = pg;
		const client = new Client({
			connectionString: POSTGRES_URL + '?sslmode=require'
		});
		await client.connect();
		const res = await client.query(
			`
		DELETE 
		FROM pr
		WHERE id=${params.id}
		`,
			[]
		);
		await client.end();
		return json(res.rows);
	} catch (e) {
		return e;
	}
}
