<script>
	export let href = '';
	export let title = undefined;
	export let text = '';
</script>

<img src={href} {title} alt={text} />

<style>
	img {
		height: auto;
		width: 100%;
	}
</style>
