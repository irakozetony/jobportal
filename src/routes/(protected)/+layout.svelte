<script lang="ts">
    import Sidebar from "../../lib/components/Sidebar.svelte";
    import {Drawer, drawerStore} from "@skeletonlabs/skeleton";
    import JobForm from "$lib/components/JobForm.svelte";
    import type {LayoutData} from './$types';

    export let data: LayoutData;
</script>
<Drawer>
    {#if $drawerStore.id === 'add-job'}
        <JobForm {data}/>
    {/if}
</Drawer>
<Sidebar />
<slot />
