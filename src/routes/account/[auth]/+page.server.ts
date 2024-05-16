import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const load: PageServerLoad = (e) => {
    const validPaths = ["sign-in", "sign-up"];
    if (!validPaths.includes(e.params.auth)) {
        throw error(404, "Not found")
    }
}

export { load };