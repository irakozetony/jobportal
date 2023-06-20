<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { loginSchema } from '$lib/validation/user.validation';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form, {
		validators: loginSchema,
		onError: (error) => {
			const t: ToastSettings = {
				message: error.result.error.message,
				background: 'variant-filled-warning'
			};
			toastStore.trigger(t);
		}
	});
</script>

<!--<SuperDebug data={$form} />-->
<Toast position="br" />
<section
	class="border border-gray-300 w-fit shadow-md mx-auto align-middle p-5 rounded font-roboto h-fit my-auto mt-32"
>
	<h3 class="font-medium mb-7 text-xl">Login</h3>

	<!-- <button
		class="bg-white hover:bg-gray-50 font-bold py-2 rounded flex items-center justify-center gap-2 border border-gray-200"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 48 48"
			width="5%"
		>
			<defs>
				<path
					id="a"
					d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
				/>
			</defs>
			<clipPath id="b">
				<use xlink:href="#a" overflow="visible" />
			</clipPath>
			<path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
			<path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
			<path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
			<path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
		</svg>
		<span class="font-medium"> Login with google </span>
	</button>

	<hr class="h-px my-8 bg-gray-200 border-0" /> -->

	<form method="post" use:enhance>
		<div>
			<label class="label" for="email">
				<span>Email</span>
				<input
					class={$errors.email ? 'input-error block w-full' : 'input'}
					type="email"
					placeholder="johndoe@email.com"
					name="email"
					id="email"
					bind:value={$form.email}
				/>
			</label>
			{#if $errors.email}
				<small class="text-red-600">{$errors.email}</small>
			{/if}
		</div>
		<div>
			<label class="label" for="password">
				<span>Password</span>
				<input
					class="input"
					type="password"
					placeholder="•••••••••"
					name="password"
					id="password"
				/>
			</label>
		</div>
		<button type="submit" class="btn variant-filled w-full mt-8 mb-8">Log in</button>
	</form>

	<hr class="h-px my-8 bg-gray-200 border-0" />

	<div class="flex flex-col justify-center items-center">
		<p class="text-gray-500">Don't have an account?</p>
		<a href="/auth/signup" class="block text-blue-700">Sign up</a>
	</div>
</section>
