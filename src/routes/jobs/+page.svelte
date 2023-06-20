<script lang="ts">
	import type { PageData } from './$types';
	import JobCard from '$lib/components/JobCard.svelte';

	export let data: PageData;
</script>

<section class="p-24 bg-red-500 flex">
	{#each data?.jobs as job (job.id)}
		<JobCard {job} />
	{/each}
</section>
