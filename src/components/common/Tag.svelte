<script lang="ts">
	export let backgroundColor = `var(--bg-color-1)`;
	export let textColor = `var(--color-primary)`;
</script>

<span class="tag" style="background-color: {backgroundColor}; color: {textColor}">
	<slot />
</span>

<style>
	.tag {
		font-weight: 300;
		font-size: 0.75rem;
		padding: 0.2rem 0.6rem;
		border-radius: 1rem;
	}
</style>
