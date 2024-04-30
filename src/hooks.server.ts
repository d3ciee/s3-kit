import type { Handle } from "@sveltejs/kit";
import initDB from "./lib/config/db";

const useAuth: Handle = ({ event }) => {
    const db = initDB();
    event.locals.db = db;


}
