import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const actions = {
    default: async ({cookies})=>{
        let token = cookies.get('token');
        console.log(token, '+++++++TOKEN');
        cookies.delete('token');
        cookies.set("token", "", {
            httpOnly: true,
            path: '/',
            maxAge: 0
        });
        token = cookies.get('token');
        console.log(token, 'AFTER DELETE')
        throw redirect(303, '/auth/login');
    }
} satisfies Actions;
