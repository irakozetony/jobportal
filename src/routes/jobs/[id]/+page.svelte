<script lang="ts">
    import type {PageData} from './$types';
    import {getRemainingTime} from "$lib/helpers/getRemainingTime";
    import {parseString} from "$lib/helpers/parseString";
    export let data: PageData;
    // $: ({job, requirements} = data);
    $: ({job} = data);
</script>
<section class="p-24">
    <div class="border border-gray-200 min-h-screen rounded-lg p-12">
        <h1 class="text-3xl font-black text-gray-900">{job.title}</h1>
        <p class="italic inline-flex gap-2 mt-2  text-gray-400">
            <img src="/assets/icons/at.svg" alt="At Symbol Icon" width="18">
            {job.company}
        </p>
        <div class="mt-4">
            <span class="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full inline-flex gap-2">
                <img src="/assets/icons/location.svg" alt="Location Icon" width="16">
                {job.location}
            </span>
            <span class="bg-green-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full inline-flex gap-2">
                <img src="/assets/icons/money.svg" alt="Money Icon" width="16">
                {job.salary}
            </span>
            <span class="bg-red-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full inline-flex gap-2">
                <img src="/assets/icons/clock.svg" alt="Money Icon" width="16">
                {getRemainingTime(job.deadline)}
            </span>
        </div>
        <hr class="h-px my-8 mb-16 bg-gray-600 border-0 w-[300px]">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Description</h3>
        <p>
            {job.description}
        </p>
        <h3 class="text-2xl font-bold text-gray-800 my-4">Requirements</h3>
        <ul class="list-disc ml-8">
            {#each parseString(job.requirements) as requirement}
                {#if requirement}
                    <li>{requirement}</li>
                {/if}
            {/each}
        </ul>
        <h3 class="text-2xl font-bold text-gray-800 my-4">Responsibilities</h3>
        <ul class="list-disc ml-8">
            {#each parseString(job.responsibilities) as responsibility}
                {#if responsibility}
                    <li>{responsibility}</li>
                {/if}
            {/each}
        </ul>
        <div class="mt-6">
            <a
                    href="{job.applicationUrl}"
                    class="btn btn-xl bg-black text-white w-fit rounded-full"
            >Apply</a
            >
        </div>
    </div>
</section>
