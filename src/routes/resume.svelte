<script>
	import PageHeader from '../components/common/PageHeader.svelte';
	import PdfViewer from '../components/common/PdfViewer.svelte';
</script>

<svelte:head>
	<title>Résumé - shornabho.com</title>
</svelte:head>

<PageHeader title={'résumé'} subtitle={''} />
<div class="container page-body-container">
	<PdfViewer />
</div>
