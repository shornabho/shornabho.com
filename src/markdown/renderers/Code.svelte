<script>
	import hljs from 'highlight.js';
	export let lang;
	export let text;
	let code = hljs.highlight(text, { language: lang }).value;
</script>

<pre class={`hljs ${lang}`}><code class="hljs">{@html code}</code></pre>

<style>
	pre {
		margin: 1rem 0;
		background: var(--bg-color-1);
	}
	code {
		background: var(--bg-color-1);
		color: var(--text-color-secondary);
		font-size: 0.875rem;
	}
</style>
