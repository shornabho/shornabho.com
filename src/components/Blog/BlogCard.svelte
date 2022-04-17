<script lang="ts">
	import type { Blogpost } from '../../models/Blogpost';
	import Tag from '../common/Tag.svelte';

	export let blogpost: Blogpost;
</script>

<a href="/blog/{blogpost.slug}">
	<article class="blog-card">
		<div class="blog-cover-image-container">
			<img src={blogpost.coverImageUrl} alt="" class="blog-cover-image" />
		</div>
		<h2 class="blog-title">{blogpost.title}</h2>
		<p class="blog-description">{blogpost.shortDescription}</p>
		<div class="blog-tags">
			{#each blogpost.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
		<div class="blog-card-footer">
			<div class="blog-card-footer-left">
				{blogpost.author} &nbsp; • &nbsp; {new Intl.DateTimeFormat('en-US', {
					month: 'long',
					day: '2-digit',
					year: 'numeric'
				}).format(blogpost.createdAt)}
			</div>

			<div class="blog-card-footer-right">2 min read</div>
		</div>
	</article>
</a>

<style>
	.blog-card {
		background-color: var(--bg-color-4);
		border-radius: 0.5rem;
		font-family: var(--primary-font-family);
		padding: 1rem;
	}

	.blog-cover-image-container {
		height: 8rem;
		border-radius: 0.5rem 0.5rem 0 0;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.blog-cover-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.blog-title {
		color: var(--text-color-primary);
		font-weight: 500;
		font-size: 1.2rem;
	}

	.blog-description {
		color: var(--text-color-secondary);
		font-size: 0.75rem;
		font-weight: 300;
		margin: 0.5rem 0;
		line-height: 1.2;
	}

	.blog-tags {
		margin: 1rem 0 0.5rem;
		display: flex;
		gap: 0.5rem;
	}

	.blog-card-footer {
		display: flex;
		justify-content: space-between;
		color: var(--text-color-secondary);
		font-size: 0.75rem;
		font-weight: 300;
	}
</style>
