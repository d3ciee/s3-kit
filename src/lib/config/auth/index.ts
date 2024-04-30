import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import type { DB } from "../db";
import UserSession from "../../models/user/user-session";
import User from "../../models/user/user";

/**
     Initialize authentication with Lucia.
    * @param db - The database connection.
    * @returns The authentication adapter.
*/
const initAuth = (db: DB) => {
    const adapter = new DrizzleSQLiteAdapter(db, UserSession, User);
    return new Lucia(adapter, {
        sessionCookie: {
            attributes: {
                secure: !dev
            }
        }
    })
}

export default initAuth;

declare module "lucia" {
    interface Register {
        Lucia: ReturnType<typeof initAuth>;
    }
}