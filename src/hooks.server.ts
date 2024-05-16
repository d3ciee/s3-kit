import type { Handle } from "@sveltejs/kit";
import initDB from "./lib/config/db";
import { sequence } from "@sveltejs/kit/hooks";
import useAuth from "$lib/config/auth/use-auth";

const useDB: Handle = ({ event, resolve }) => {
    event.locals.db = initDB();
    return resolve(event);
}

export default sequence(useDB, useAuth)