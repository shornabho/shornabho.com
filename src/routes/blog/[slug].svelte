<script lang="ts">
	import { page } from '$app/stores';

	import Article from '../../components/common/Article.svelte';

	import { Blogposts, loadBlogpost } from '../../stores/blogposts';

	let slug = $page.url.pathname.split('/').at(-1);
</script>

<Article blogpost={$Blogposts.filter((blogpost) => slug === blogpost.slug).at(0)} />
