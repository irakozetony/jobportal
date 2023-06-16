<script lang="ts">
	import type { PageData } from '../../../.svelte-kit/types/src/routes';
	import JobCard from '$lib/components/JobCard.svelte';

	export let data: PageData;
</script>

<section class="p-24 flex flex-wrap-reverse">
	{#each data?.jobs as job (job.id)}
		<JobCard {job} />
	{/each}
</section>
