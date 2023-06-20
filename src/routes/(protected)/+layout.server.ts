import type {RequestEvent} from "@sveltejs/kit";
import {superValidate} from "sveltekit-superforms/server";
import {jobSchema} from "$lib/validation/job.validation";

export const load = async (event: RequestEvent)=>{
    const form = superValidate(event, jobSchema);
    return {form};
}
