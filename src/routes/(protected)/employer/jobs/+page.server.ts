import prisma from "$lib/prisma";
import type {PageServerLoad, RequestEvent} from './$types';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from "$env/static/private";
import {superValidate} from "sveltekit-superforms/server";
import {jobSchema} from "$lib/validation/job.validation";
import {fail, redirect} from "@sveltejs/kit";

export const load = (async ({cookies}) => {
    const token = cookies.get("token");
    if (typeof token !== 'string')
        return fail(400, {error: 'Invalid token'})
    const decodedToken = jwt.verify(token, JWT_SECRET) as { role: string, id: string };
    const {id, role} = decodedToken;
    let response;
    if (role === 'admin')
        response = await prisma.job.findMany({});
    if (role === 'employer')
        response = await prisma.job.findMany({
            where: {
                employerId: id
            }
        });
    return {jobs: response, role};
}) satisfies PageServerLoad;

export const actions = {
    create: async (event: RequestEvent) => {
        const form = await superValidate(event, jobSchema);
        if (!form.valid) return fail(400, {form});
        const token = event.cookies.get("token");
        if (typeof token !== 'string')
            return fail(400, {error: 'Invalid token'})
        const decodedToken = jwt.verify(token, JWT_SECRET) as { id: string }
        const {id} = decodedToken;
        await prisma.job.create({
            data: {...form.data, employerId: id}
        });
        throw redirect(303, '/employer/jobs');
    },
    delete: async(event: RequestEvent)=>{
        const data = await event.request.formData();
        const id = data.get('id')?.toString();
        await prisma.job.delete({
            where: {id}
        });
    }
}
