<script lang="ts">
	import { page } from '$app/stores';

	import Navbar from '../components/common/Navbar.svelte';
	import Footer from '../components/common/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" type="image/x-icon" href={`${$page.url.origin}/favicon.ico`} />
	<title>shornabho.com</title>

	<!-- Meta Tags -->
	<meta property="og:title" content="shornabho.com" />
	<meta property="og:site_name" content="shornabho.com" />
	<meta property="og:description" content="Your friendly neighbourhood developer" />
	<meta property="og:image" itemprop="image" content={`${$page.url.origin}/favicon.png`} />
	<meta
		property="og:image:secure_url"
		itemprop="image"
		content={`${$page.url.origin}/favicon.png`}
	/>
	<meta property="og:type" content="website" />

	<!-- Twitter Tags -->
	<meta name="twitter:title" content="shornabho.com" />
	<meta property="twitter:description" content="Your friendly neighbourhood developer" />
	<meta property="twitter:image" content={`${$page.url.origin}/favicon.png`} />
</svelte:head>

<Navbar />

<div class="body-wrapper">
	<slot />
</div>

<Footer />

<style global>
	:root {
		--color-primary: #f7c626;
		--color-secondary: #0e9524;
		--bg-color-1: #030911;
		--bg-color-2: #050c15;
		--bg-color-3: #060e19;
		--bg-color-4: #081221;
		--bg-color-5: #0d1b30;
		--bg-color-6: #14243e;
		--bg-secondary: #cccccc40;
		--text-color-primary: #cccccc;
		--text-color-accent: #aaa7a7;
		--text-color-secondary: #707885;
		--color-primary-50-percent: #f7c62680;
		--color-primary-25-percent: #f7c62640;

		--primary-font-family: 'Ubuntu', sans-serif;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	::selection {
		background: var(--color-primary-50-percent);
		color: var(--bg-color-5);
	}

	.container {
		margin: 0 auto;
		width: 80%;
		max-width: 1000px;
	}

	@media screen and (max-width: 1023px) {
		.container {
			width: 80%;
		}
	}

	.text-primary {
		color: var(--color-primary);
	}

	.d-flex {
		display: flex;
	}

	.m-auto {
		margin: auto;
	}

	a {
		text-decoration: none;
	}

	body {
		background-color: var(--bg-color-2);
	}

	.body-wrapper {
		min-height: 90vh;
	}

	@media screen and (max-width: 1023px) {
		.body-wrapper {
			min-height: 90vh;
		}
	}

	.page-body-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
