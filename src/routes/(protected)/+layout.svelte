<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
</script>
<main class="flex">
    <Sidebar class="flex-grow-0"/>
    <slot/>
</main>
