import prisma from '$lib/prisma';

export const isRegistered = async (email: string) => {
	return prisma.user.findUnique({
		where: { email }
	});
};
