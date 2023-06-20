import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const actions = {
    default: async ({cookies})=>{
        cookies.set("token", "", {
            httpOnly: true,
            path: '/',
            maxAge: 0
        });
        throw redirect(303, '/auth/login');
    }
} satisfies Actions;
