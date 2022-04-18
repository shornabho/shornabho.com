<script>
	export let depth;
	export let raw;
	export let text;
	const id = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
</script>

{#if depth === 1}
	<h1><slot /></h1>
{:else if depth === 2}
	<h2><slot /></h2>
{:else if depth === 3}
	<h3><slot /></h3>
{:else if depth === 4}
	<h4><slot /></h4>
{:else if depth === 5}
	<h5><slot /></h5>
{:else if depth === 6}
	<h6><slot /></h6>
{:else}
	{raw}
{/if}

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 400;
		line-height: 2;
		margin-top: 0.5em;
		margin-bottom: 0.25em;
	}

	h1 {
		font-size: 1.7rem;
		font-weight: 500;
	}
	h2 {
		font-size: 1.5rem;
	}
	h3 {
		font-size: 1.3rem;
	}
	h4 {
		font-size: 1.1rem;
		font-weight: 500;
	}
	h5 {
		font-size: 1rem;
	}
	h6 {
		font-size: 1rem;
	}
</style>
