<script lang="ts">
    import type {PageData} from './$types';
    import {getRemainingTime} from "$lib/helpers/getRemainingTime";

    export let data: PageData;
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
    </div>
</section>
