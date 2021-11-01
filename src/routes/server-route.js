/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	// Generate a random state to verify proper oauth process.
	return {
		status: 302,
		headers: {
			location: '/'
		}
	};
}
