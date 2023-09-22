import pg from 'pg';
import { json } from '@sveltejs/kit';
import { POSTGRES_URL } from '$env/static/private';

export async function GET({ params }) {
	const { Client } = pg;
	const client = new Client({
		connectionString: POSTGRES_URL + '?sslmode=require'
	});
	await client.connect();

	const res = await client.query(
		`
	SELECT * from match WHERE match_id =${params.id};
	`
	);
	await client.end();
	return json(res.rows.length ? res.rows[0] : { error: true });
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
		FROM match
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
