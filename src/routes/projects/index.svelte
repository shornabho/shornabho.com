<script lang="ts">
	import ProjectCard from '../../components/Projects/ProjectCard.svelte';
	import PageHeader from '../../components/common/PageHeader.svelte';

	import { Projects, loadAllProjects } from '../../stores/projects';

	loadAllProjects();
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
		{#each $Projects as project}
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
