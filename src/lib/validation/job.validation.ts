import { z } from 'zod';

export const jobSchema = z.object({
    title: z.string().min(4),
    description: z.string().min(4),
    requirements: z.string().min(4),
    responsibilities: z.string().min(4),
    applicationUrl: z.string().url(),
    location: z.string().min(2),
    salary: z.string().min(2),
    company: z.string().min(5),
    deadline: z.string().transform(str => new Date(str)),
});
