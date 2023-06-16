<script lang="ts">
	import HeroImage from './HeroImage.svelte';
</script>

<div class="flex">
	<section class="flex flex-col justify-center w-1/2 pl-28">
		<h1 class="text-6xl font-black mb-8 w-4/12">Find your dream job here.</h1>
		<p class="text-zinc-500 w-4/12">
			Find the job that suits you the most and get to work with the best of the best.
		</p>
		<a
			href="/jobs"
			class="btn btn-xl border border-black w-fit rounded-full mt-8 p-6 hover:bg-black hover:text-white"
			data-sveltekit-preload-data="hover">Explore jobs</a
		>
	</section>
	<section class="w-1/2 relative">
		<div class="z-0">
			<div
				class="absolute top-72 left-60 w-96 h-96 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"
			/>
			<div
				class="absolute top-64 right-24 w-96 h-96 bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
			/>
			<div
				class="absolute bottom-32 left-44 w-96 h-96 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
			/>
		</div>
		<div class="z-10 relative">
			<svelte:component this={HeroImage} />
		</div>
	</section>
</div>
