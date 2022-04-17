<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const projects: Project[] = await getAllProjects();

		return {
			props: {
				projects
			}
		};
	}
</script>

<script lang="ts">
	import ProjectCard from '../../components/Projects/ProjectCard.svelte';
	import PageHeader from '../../components/common/PageHeader.svelte';
	import type { Project } from '../../models/Project';
	import { getAllProjects } from '../../stores/projects';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Projects - shornabho.com</title>
</svelte:head>

<PageHeader
	title={'projects'}
	subtitle={'some personal and professional projects that I enjoyed building.'}
/>

<div class="container page-body-container">
	<div class="projects-container">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.projects-container {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 2rem 2.5rem;
	}

	@media screen and (max-width: 1023px) {
		.projects-container {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
