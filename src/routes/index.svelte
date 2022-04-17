<script>
	import Tag from '../components/common/Tag.svelte';
</script>

<svelte:head>
	<title>Home - shornabho.com</title>
</svelte:head>

<div class="container page-body-container">
	<div class="hero-section">
		<div class="hero-left-section">
			<div class="hero-left-section-container">
				hi, i am
				<span class="my-name text-primary">Swarnava Ghosh,</span>
				<div class="by-line">
					your friendly neighbourhood
					<br />
					<span class="text-primary">developer.</span>

					<div class="tags">
						<Tag backgroundColor={`var(--bg-secondary)`} textColor={`var(--text-color-primary)`}>
							python
						</Tag>
						<Tag backgroundColor={`var(--bg-secondary)`} textColor={`var(--text-color-primary)`}>
							javascript
						</Tag>
						<Tag backgroundColor={`var(--bg-secondary)`} textColor={`var(--text-color-primary)`}>
							full-stack
						</Tag>
					</div>
				</div>
			</div>
		</div>

		<div class="hero-right-section">
			<div class="avatar">
				<img src="/img/home/avatar.svg" class="avatar-image" alt="Swarnava - Avatar" />
			</div>
		</div>
	</div>
	<div class="hero-bio">
		i am a software engineer with a knack for building products.
		<br />
		a geek who breaks stuff, analyses tech and is obsessed with performance and user experience.
	</div>
</div>

<style>
	.hero-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 2rem;
		margin: 8rem 0;
	}

	.hero-left-section {
		font-family: var(--primary-font-family);
		color: var(--text-color-primary);
		font-weight: 300;
		line-height: 1.75;
		display: flex;
		font-size: 1.2rem;
	}

	.hero-left-section-container {
		margin: auto 0;
	}

	.hero-left-section .my-name {
		display: block;
		font-size: 2.5em;
		line-height: 1;
		margin-bottom: 2rem;
	}

	.hero-left-section .by-line {
		line-height: 1.5;
		margin-left: -10%;
		padding-left: 10%;
		margin-top: -10%;
		padding-top: 10%;
		margin-bottom: -10%;
		padding-bottom: 10%;
		background: url('/img/home/left-section-bg-patch.svg');
		background-size: 80%;
		background-repeat: no-repeat;
	}

	.hero-left-section .by-line .tags {
		margin-top: 1.5rem;
	}

	.hero-right-section {
		display: flex;
		background: url('/img/home/right-section-thought-bubble.svg');
		background-repeat: no-repeat;
		background-size: 25%;
		background-position: left center;
		margin-left: -10%;
		padding-left: 10%;
	}

	.hero-right-section .avatar {
		width: 75%;
		margin: auto;
		position: relative;
	}

	.hero-right-section .avatar::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 15%;
		background: linear-gradient(to top, var(--bg-color-2) 40%, transparent 100%);
	}

	.hero-right-section .avatar .avatar-image {
		width: 100%;
		height: auto;
		filter: contrast(1.2);
	}

	.hero-bio {
		text-align: center;
		color: var(--text-color-primary);
		font-family: var(--primary-font-family);
		font-weight: 300;
		line-height: 1.5;
		font-size: 1rem;
		margin-top: 2rem;
	}

	@media screen and (max-width: 1023px) {
		.hero-section {
			grid-template-columns: 1fr;
			gap: 1vh 0;
			margin: 10vh 0 5vh;
		}

		.hero-right-section {
			/* Reverse column order */
			grid-row-start: 1;

			background-size: 20%;
			margin-left: 0;
			padding-left: 0;
		}

		.hero-left-section {
			/* font-size: 0.875rem; */
			font-size: 3.5vw;
			margin: 1rem auto;
		}

		.hero-left-section .my-name {
			margin-bottom: 1.2rem;
		}

		.hero-left-section .by-line .tags {
			margin-top: 0.75rem;
		}

		.hero-bio {
			font-size: 3vw;
			margin-top: 5vh;
		}
	}
</style>
