<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<div class="page-header">
	<div class="container page-header-container">
		<h1 class="page-title">{title}</h1>
		<p class="page-subtitle">{subtitle}</p>
	</div>
</div>

<style>
	.page-header {
		padding: 2.5rem 0;
		font-family: var(--primary-font-family);
		text-align: center;
	}

	.page-title {
		font-weight: 500;
		color: var(--text-color-primary);
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}

	.page-subtitle {
		font-weight: 300;
		color: var(--text-color-secondary);
		font-size: 0.875rem;
	}

	@media screen and (max-width: 768px) {
		.page-header {
			padding-bottom: 0.5rem;
		}
	}
</style>
