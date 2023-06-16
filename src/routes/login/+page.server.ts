import type { RequestEvent } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/validation/user.validation';
import { error, fail, redirect } from '@sveltejs/kit';
import { isRegistered } from '$lib/utils/user.utils';
import { isValidPassword } from '$lib/utils/bcrypt.utils';
import prisma from '$lib/prisma';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const load = async (event: RequestEvent) => {
	const form = superValidate(event, loginSchema);
	return { form };
};

export const actions = {
	default: async (event: RequestEvent) => {
		const form = await superValidate(event, loginSchema);
		if (!form.valid) return fail(400, { form });
		if (!(await isRegistered(form.data.email))) throw error(400, 'User not found');
		const user = await prisma.user.findUnique({
			where: {
				email: form.data.email
			}
		});
		if (user && !(await isValidPassword(form.data.password, user.password)))
			throw error(400, 'Invalid credentials');

		const userData = {
			id: user?.id,
			role: user?.role,
			email: user?.email,
			full_name: user?.full_name
		};

		const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '1d' });
		event.cookies.set('token', token, {
			httpOnly: true,
			path: '/',
			sameSite: true,
			maxAge: 60 * 60 * 24
		});
		if (user?.role === 'admin') throw redirect(303, '/dashboard');
		if (user?.role === 'employer') throw redirect(303, '/employer/jobs.svg');
	}
};
