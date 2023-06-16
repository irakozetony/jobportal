<script>
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<main class="max-h-fit">
	<slot />
</main>
