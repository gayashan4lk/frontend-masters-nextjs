import { relations, InferSelectModel } from 'drizzle-orm'
import { text, pgTable, timestamp, serial } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
	id: text('id').primaryKey().notNull(),
	email: text('email').notNull().unique(),
	password: text('password').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const issues = pgTable('issues', {
	id: serial('id').primaryKey().notNull(),
	title: text('title').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
	userId: text('user_id').notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
	issues: many(issues),
}))

export const issuesRelations = relations(issues, ({ one }) => ({
	user: one(users, {
		fields: [issues.userId],
		references: [users.id],
	}),
}))

export type Issue = InferSelectModel<typeof issues>
export type User = InferSelectModel<typeof users>
