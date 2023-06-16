import { z } from 'zod';

export const signupSchema = z.object({
	full_name: z.string().min(4),
	email: z.string().email(),
	company: z.string().min(1),
	password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
});

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string()
});
