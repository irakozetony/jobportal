import type { Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');
	const path = event.route.id;

	if (path?.includes('protected') && !token) {
		throw redirect(303, '/auth/login');
	}

	if (path?.includes('admin')) {
		try {
			const userData = jwt.verify(token, JWT_SECRET);
			if (userData && userData.role === 'admin') {
				return resolve(event);
			} else {
				throw redirect(303, '/auth/login');
			}
		} catch (error) {
			console.log(error);
			throw redirect(303, '/auth/login');
		}
	}

	return resolve(event);
};
