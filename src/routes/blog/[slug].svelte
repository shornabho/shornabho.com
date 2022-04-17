<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const blogpost: Blogpost = await getBlogpost(params.slug);

		if (blogpost) {
			return {
				props: {
					blogpost
				}
			};
		} else {
			return {
				status: 404,
				error: 'The blogpost could not be found'
			};
		}
	}
</script>

<script lang="ts">
	import Article from '../../components/common/Article.svelte';
	import type { Blogpost } from '../../models/Blogpost';
	import { getBlogpost } from '../../stores/blogposts';

	export let blogpost: Blogpost;
</script>

<Article {blogpost} />
