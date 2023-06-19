<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte'
	import type {LayoutData} from './$types';
	export let data: LayoutData;
</script>

<Nav {data}/>
<main class="max-h-fit">
	<slot />
</main>
