import type {LayoutServerLoad} from "./$types";

export const load = (async ({cookies}) => {
    const token = cookies.get("token");
    let isLoggedIn = true;
    if (!token)
        isLoggedIn = false;
    return {isLoggedIn};
}) satisfies LayoutServerLoad

