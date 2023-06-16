import bcrypt from 'bcryptjs';

export const hashPassword = (password: string) => {
	return bcrypt.hash(password, 12);
};

export const isValidPassword = async (providedPassword: string, userPassword: string) => {
	return await bcrypt.compare(providedPassword, userPassword);
};
