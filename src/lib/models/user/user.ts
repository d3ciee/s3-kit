import { sqliteTable, text } from "drizzle-orm/sqlite-core"

const User = sqliteTable("user", {
    id: text("id").notNull().primaryKey(),
})

export type User = typeof User.$inferSelect;
export default User;
