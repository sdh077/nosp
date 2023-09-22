import pg from 'pg';
import { json } from '@sveltejs/kit';
import { POSTGRES_URL } from '$env/static/private';
export async function GET({ url }) {
	try {
		const { Client } = pg;

		let client = new Client({
			connectionString: POSTGRES_URL + '?sslmode=require&max=2000'
		});
		await client.connect();
		const res = await client.query(
			`
			SELECT * from league;
			`
		);
		await client.end();
		client = null;
		return json(res.rows);
	} catch (e) {
		return json([]);
	}
}