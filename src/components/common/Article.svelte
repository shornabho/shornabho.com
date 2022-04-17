<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';

	import type { Project } from '../../models/Project';
	import type { Blogpost } from '../../models/Blogpost';

	import Heading from '../../markdown/renderers/Heading.svelte';
	import List from '../../markdown/renderers/List.svelte';

	export let project: Project = null;
	export let blogpost: Blogpost = null;

	const source = `
# This is a 1st header

This is a paragraph.

## This is a 2nd header

This is a paragraph.

### This is a 3rd header

This is a paragraph.

#### This is a 4th header

This is a paragraph.

##### This is a 5th header

This is a paragraph.

###### This is a 6th header

This is a paragraph.



* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |

\`\`\`bash

cd swarnava/
mkdir swarnava

\`\`\`

`;

	const renderers = {
		heading: Heading,
		list: List
	};

	let breadcrumbs: string[] = $page.url.pathname.slice(1).split('/');
</script>

<svelte:head>
	<title>{(project && project.title) || (blogpost && blogpost.title)} - shornabho.com</title>
</svelte:head>

<div class="container page-body-container">
	<div class="article-pre-header">
		<div class="breadcrumbs">
			<a href="/{breadcrumbs[0]}" class="breadcrumb">{breadcrumbs[0]}</a>

			{#each breadcrumbs.slice(1) as breadcrumb, index}
				&nbsp; &gt; &nbsp;
				<a href="/{breadcrumbs.slice(0, index + 2).join('/')}" class="breadcrumb">{breadcrumb}</a>
			{/each}
		</div>
		<div class="share-button">
			<svg class="share-icon" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.43359 5H12.7636C13.0011 5.00008 13.2298 5.09031 13.4033 5.25247C13.5769 5.41463 13.6824 5.63663 13.6986 5.8736C13.7148 6.11058 13.6404 6.34487 13.4906 6.52913C13.3407 6.71339 13.1264 6.83388 12.8911 6.86625L12.7636 6.875H8.43359C7.72114 6.87489 7.03519 7.14518 6.51431 7.63126C5.99342 8.11734 5.67642 8.78299 5.62734 9.49375L5.62109 9.6875V21.5625C5.62132 22.2749 5.89192 22.9608 6.37823 23.4814C6.86454 24.0021 7.53032 24.3187 8.24109 24.3675L8.43359 24.375H20.3086C21.0213 24.3751 21.7074 24.1046 22.2283 23.6183C22.7492 23.132 23.0661 22.466 23.1148 21.755L23.1211 21.5625V20.94C23.1187 20.7008 23.2078 20.4697 23.3702 20.294C23.5326 20.1184 23.756 20.0114 23.9947 19.9951C24.2334 19.9789 24.4692 20.0544 24.654 20.2064C24.8388 20.3583 24.9585 20.5752 24.9886 20.8125L24.9961 20.94V21.5625C24.9959 22.7623 24.5356 23.9163 23.7101 24.7869C22.8846 25.6576 21.7567 26.1785 20.5586 26.2425L20.3086 26.25H8.43359C7.23339 26.2501 6.07888 25.7898 5.20795 24.964C4.33702 24.1382 3.81603 23.0098 3.75234 21.8113L3.74609 21.5613V9.68625C3.74631 8.48647 4.20656 7.33245 5.03208 6.46182C5.85759 5.59119 6.98552 5.07024 8.18359 5.00625L8.43359 5H12.7636H8.43359V5ZM18.1248 8.15V4.6875C18.1247 4.51506 18.1722 4.34593 18.262 4.19871C18.3518 4.0515 18.4805 3.9319 18.6338 3.85308C18.7872 3.77426 18.9594 3.73927 19.1313 3.75196C19.3033 3.76465 19.4684 3.82453 19.6086 3.925L19.7111 4.01L27.2036 11.1975C27.5536 11.5338 27.5861 12.0725 27.2998 12.445L27.2036 12.5513L19.7111 19.7413C19.5867 19.8608 19.4317 19.9436 19.2632 19.9807C19.0947 20.0178 18.9193 20.0076 18.7562 19.9514C18.5931 19.8952 18.4487 19.7951 18.3388 19.6621C18.229 19.529 18.158 19.3683 18.1336 19.1975L18.1248 19.0638V15.6575L17.6948 15.695C14.6948 16.0075 11.8198 17.3588 9.05234 19.77C8.40234 20.3363 7.39859 19.8013 7.50609 18.9475C8.33609 12.2975 11.8136 8.63375 17.7498 8.17375L18.1248 8.14875V4.6875V8.15ZM19.9998 6.88375V9.0625C19.9998 9.31114 19.9011 9.5496 19.7253 9.72542C19.5494 9.90123 19.311 10 19.0623 10C14.2198 10 11.2198 12.095 9.92234 16.4463L9.82359 16.7938L10.2636 16.4975C13.0623 14.6713 15.9973 13.75 19.0636 13.75C19.2903 13.7501 19.5094 13.8323 19.6801 13.9814C19.8509 14.1306 19.9618 14.3366 19.9923 14.5613L20.0011 14.6875V16.8663L25.1998 11.875L19.9998 6.885V6.88375Z"
				/>
			</svg>
		</div>
	</div>

	<article>
		<div class="article-header">
			{#if blogpost && blogpost.coverImageUrl}
				<div class="cover-image-container">
					<img src={blogpost.coverImageUrl} alt="Blogpost Cover" class="cover-image" />
				</div>
			{/if}
			<h1 class="title">
				{(blogpost && blogpost.title) ||
					(project && project.title?.concat(': ' + project.subtitle))}
			</h1>
			<p class="subtitle">
				{#if project}
					{#if project.urls?.web}
						<a class="project-url" href={project.urls?.web}>
							{project.urls?.web && new URL(project.urls?.web).hostname}
						</a>
					{:else if project.urls?.git}
						<a class="project-url" href={project.urls?.git}>
							{project.urls?.git && new URL(project.urls?.git).hostname}
						</a>
					{/if}
					•
				{:else if blogpost && blogpost.createdAt}
					{new Intl.DateTimeFormat('en-US', {
						month: 'long',
						day: '2-digit',
						year: 'numeric'
					}).format(blogpost.createdAt)} •
				{/if}
				2 min read
			</p>
			<div class="tags">
				{#if project && project.tags}
					{#each project.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				{:else if blogpost && blogpost.tags}
					{#each blogpost.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				{/if}
			</div>
		</div>

		<div class="article-body">
			{#if (project && project.fullContent) || (blogpost && blogpost.fullContent)}
				<SvelteMarkdown
					source={(project && project.fullContent) || (blogpost && blogpost.fullContent)}
					{renderers}
				/>
			{/if}
		</div>
	</article>
</div>

<style>
	* {
		font-family: var(--primary-font-family);
	}
	.article-pre-header {
		color: var(--text-color-secondary);
		display: flex;
		justify-content: space-between;
		margin: 0 0 1rem;
	}

	.breadcrumbs .breadcrumb {
		color: var(--color-primary);
		font-weight: 300;
		font-size: 0.875rem;
	}

	.share-button > .share-icon {
		height: 1.5rem;
		width: 1.5rem;
		fill: var(--text-color-secondary);
	}

	article {
		background-color: var(--bg-color-4);
		padding: 1rem;
		border-radius: 0.75rem;
	}

	article .article-header {
		text-align: center;
	}

	.cover-image-container {
		height: 12rem;
		border-radius: 0.5rem 0.5rem 0 0;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.cover-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	article .title {
		color: var(--text-color-primary);
		font-weight: 400;
		font-size: 1.3rem;
		margin: 2rem 0 0.75rem;
	}

	article .subtitle {
		font-size: 0.75rem;
		font-weight: 300;
		color: var(--text-color-secondary);
		margin: 0.75rem 0;
	}

	article .subtitle .project-url {
		color: var(--color-primary);
	}

	article .tags {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0.5rem 0;
	}

	article .tags .tag {
		color: var(--bg-color-1);
		background-color: var(--color-primary);
		font-weight: 300;
		font-size: 0.625rem;
		padding: 0.2rem 0.6rem;
		border-radius: 1rem;
	}

	article .article-body {
		margin: 2rem 1rem 1rem;
		color: var(--text-color-secondary);
		font-size: 0.75rem;
		font-weight: 300;
	}
</style>
