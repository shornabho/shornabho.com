<script lang="ts">
	import BlogCard from '../../components/Blog/BlogCard.svelte';
	import PageHeader from '../../components/common/PageHeader.svelte';

	import { Blogposts, loadAllBlogposts } from '../../stores/blogposts';

	loadAllBlogposts();
</script>

<svelte:head>
	<title>Blog - shornabho.com</title>
</svelte:head>

<PageHeader title={'blog'} subtitle={'i write tech - my experiences and whatever excites me.'} />

<div class="container page-body-container">
	<div class="blogs-container">
		{#each $Blogposts as blogpost}
			<BlogCard {blogpost} />
		{/each}
	</div>
</div>

<style>
	.blogs-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem 2.5rem;
	}

	@media screen and (max-width: 1023px) {
		.blogs-container {
			grid-template-columns: 1fr;
		}
	}
</style>
