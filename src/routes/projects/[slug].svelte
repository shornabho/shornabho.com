<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const project: Project = await getProject(params.slug);

		if (project) {
			return {
				props: {
					project
				}
			};
		} else {
			return {
				status: 404,
				error: 'The project could not be found'
			};
		}
	}
</script>

<script lang="ts">
	import Article from '../../components/common/Article.svelte';
	import type { Project } from '../../models/Project';
	import { getProject } from '../../stores/projects';

	export let project: Project;
</script>

<Article {project} />
