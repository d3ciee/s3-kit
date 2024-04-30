import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { dev } from "$app/environment";
import { DB_AUTH_TOKEN, DB_URL } from "$env/static/private";

/**
 * Initialize a libsql database connection.
 * @returns The initialized database connection.
*/

const initDB = () => {
    const client = dev ? createClient({ url: "file:./.data/local.sqlite" }) : createClient({ url: DB_URL, authToken: DB_AUTH_TOKEN })
    const db = drizzle(client)
    return db
}

export type DB = ReturnType<typeof initDB>;
export default initDB;