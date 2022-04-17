<script lang="ts">
	import { page } from '$app/stores';

	import Article from '../../components/common/Article.svelte';
	import type { Blogpost } from '../../models/Blogpost';

	import { Blogposts, loadBlogpost } from '../../stores/blogposts';

	let slug = $page.url.pathname.split('/').at(-1);
	let blogpost: Blogpost;

	loadBlogpost(slug);
</script>

<Article blogpost={$Blogposts.filter((blogpost) => slug === blogpost.slug).at(0)} />
