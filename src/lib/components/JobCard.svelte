<script lang="ts">
    import {getRemainingTime} from '$lib/helpers/getRemainingTime';

    export let job: {
        id: string;
        description: string;
        title: string;
        requirements: string;
        salary: string;
        deadline: Date;
        createdAt: Date;
    };
    export let role: string;
</script>
<div class="overflow-hidden group relative rounded-lg p-[1px] flex justify-center items-center">
    <div
            class="rounded-lg hidden group-hover:block animate-rotate-color w-[250%] h-[500%] absolute -top-[60%] -left-[50%] bg-gradient-to-r from-zinc-900 via-gray-200/40 to-zinc-700 shadow-xl"
    />
    {#if role}
        <div class="block w-full relative z-10 rounded-lg bg-white p-6 sm:p-8">
            <div class="mt-12 sm:pr-8">
                <h3 class="text-xl font-bold text-gray-900">
                    {job.title}
                </h3>
                <p class="mt-2 text-sm text-gray-500 truncate">
                    {job.description}
                </p>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div class="text-sm flex justify-between">
                    <p class="text-gray-700">Actions</p>
                    <div class="flex items-end gap-2">
                        <button
                                type="submit"
                                class="btn btn-sm border border-black w-fit rounded-full hover:bg-black hover:text-white"
                                data-sveltekit-preload-data="hover">Edit
                        </button
                        >
                        <form method="post" action="/employer/jobs?/delete">
                            <input type="hidden" name="id" value={job.id}>
                            <button
                                    type="submit"
                                    class="btn btn-sm border border-orange-500 text-orange-500 focus:text-orange-500 hover:bg-red-500 hover:text-white focus:outline-none rounded-full"
                                    data-sveltekit-preload-data="hover">Delete
                            </button
                            >
                        </form>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <a class="block w-full relative z-10 rounded-lg bg-white p-6 sm:p-8" href="jobs/{job.id}">
            <div class="mt-12 sm:pr-8">
                <h3 class="text-xl font-bold text-gray-900">
                    {job.title}
                </h3>
                <p class="mt-2 text-sm text-gray-500 truncate">
                    {job.description}
                </p>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div class="text-sm flex justify-between">
                    <p class="text-gray-700">Deadline</p>
                    <div class="flex flex-col items-end">
                        <p class="text-gray-400">{job.deadline.toLocaleDateString()}</p>
                        <p class="text-red-300">({getRemainingTime(job.deadline)})</p>
                    </div>
                </div>
            </div>
        </a>
    {/if}
</div>
