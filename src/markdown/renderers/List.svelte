<script>
	export let ordered;
	export let start;
</script>

{#if ordered}
	<ol {start}><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}

<style>
	ul,
	ol {
		margin-left: 1.5rem;
		margin-bottom: 1.5rem;
	}
</style>
