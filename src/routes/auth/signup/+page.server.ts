import { signupSchema } from '$lib/validation/user.validation';
import { superValidate } from 'sveltekit-superforms/server';
import type {Actions, RequestEvent} from '@sveltejs/kit'
import {error, fail, redirect } from '@sveltejs/kit';
import { isRegistered } from '$lib/utils/user.utils';
import prisma from '$lib/prisma';
import { hashPassword } from '$lib/utils/bcrypt.utils';
export const load = async (event: RequestEvent) => {
	const form = superValidate(event, signupSchema);
	return { form };
};

export const actions = {
	default: async (event: RequestEvent) => {
		const form = await superValidate(event, signupSchema);
		if (!form.valid) return fail(400, { form });
		if (await isRegistered(form.data.email)) throw error(409, 'User is already registered');
		const password = await hashPassword(form.data.password);
		await prisma.user.create({
			data: { ...form.data, role: 'employer', password }
		});
		throw redirect(303, '/login');
	}
} satisfies Actions;
