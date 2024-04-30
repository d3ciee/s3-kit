import User from "./user";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

const UserSession = sqliteTable("user_session", {
    id: text("id").notNull().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => User.id),
    expiresAt: integer("expires_at").notNull()
});

export type TUserSession = typeof UserSession.$inferSelect;
export default UserSession;