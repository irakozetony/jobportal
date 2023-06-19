import prisma from '$lib/prisma';
import {redirect} from "@sveltejs/kit";

export const isRegistered = async (email: string) => {
	return prisma.user.findUnique({
		where: { email }
	});
};
