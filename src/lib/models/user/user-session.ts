import User from "./user";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import {relations} from "drizzle-orm"

const UserSession = sqliteTable("user_session", {
    id: text("id").notNull().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => User.id),
    expiresAt: integer("expires_at").notNull()
});

const userSessionRelations = relations(UserSession,({one})=>({
    user: one(User, {
        fields: [UserSession.userId],
        references: [User.id]
        
    })
}))

export type TUserSession = typeof UserSession.$inferSelect;
export {userSessionRelations}
export default UserSession;