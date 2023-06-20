<script lang="ts">
    import type {PageData} from './$types';
    import JobCard from '$lib/components/JobCard.svelte';

    export let data: PageData;
</script>

<section class="p-24 flex flex-col">
    <div class="grid grid-cols-3 justify-between gap-6">
        {#each data?.jobs as job (job.id)}
            <JobCard {job}/>
        {/each}
    </div>
</section>
