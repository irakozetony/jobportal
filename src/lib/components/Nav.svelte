<script lang="ts">
    import {page} from '$app/stores';
    import {enhance} from "$app/forms";

    $:path = $page.route.id;
    export let data: {
        isLoggedIn: boolean,
    }
</script>
<nav class="flex items-center justify-between flex-wrap py-6 px-20">
    <div class="flex items-center flex-shrink-0 mr-6">
        <svg
                class="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
        >
            <path
                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
            />
        </svg>
        <a href="/" class="font-semibold text-xl tracking-tight">Job Finder</a>
    </div>
    <div class="flex items-center">
        {#if !data.isLoggedIn}
            <a
                    href="/auth/signup"
                    class="btn btn-xl border border-black w-fit rounded-full hover:bg-black hover:text-white"
            >Sign up</a
            >
        {:else}
            <a href="/employer/jobs" class="mr-8 font-bold">Dashboard</a>
            <form action="/auth/logout?" method="post" use:enhance>
                <button type="submit"
                        class="btn btn-xl border border-black font-bold w-fit rounded-full hover:bg-black hover:text-white">
                    Log out
                </button>
            </form>
        {/if}
    </div>
</nav>
