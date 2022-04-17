<script lang="ts">
	import { page } from '$app/stores';

	import Article from '../../components/common/Article.svelte';
	import type { Project } from '../../models/Project';

	import { Projects, loadProject } from '../../stores/projects';

	let slug = $page.url.pathname.split('/').at(-1);
	let project: Project;

	loadProject(slug);
</script>

<Article project={$Projects.filter((project) => slug === project.slug).at(0)} />
