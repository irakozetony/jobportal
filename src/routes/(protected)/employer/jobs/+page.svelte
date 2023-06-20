<script lang="ts">
    import type {PageData} from './$types';
    import JobCard from '$lib/components/JobCard.svelte';
    import {Drawer, drawerStore} from '@skeletonlabs/skeleton';
    import type {DrawerSettings} from '@skeletonlabs/skeleton';

    const drawerSettings: DrawerSettings = {
        id: 'add-job',
        position: "right"
    };
    export const handleOpenDrawer = () => {
        drawerStore.open(drawerSettings);
    }

    export let data: PageData;
    const {role} = data;
</script>
<section class="p-24  bg-red-500 flex flex-wrap">
    <button
            on:click={handleOpenDrawer}
            class="btn btn-sm bg-black w-fit rounded-full text-white mb-6"
            data-sveltekit-preload-data="hover">Add
    </button
    >
    <div class="bg-green-400">
        {#each data?.jobs as job (job.id)}
            <JobCard {job} {role}/>
        {/each}
    </div>
</section>
