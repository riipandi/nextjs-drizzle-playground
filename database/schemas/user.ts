import { InferModel } from 'drizzle-orm'
import { pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const roleEnum = pgEnum('role', ['user', 'admin'])

export const UserTable = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  role: roleEnum('role').default('user').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type User = InferModel<typeof UserTable>

export type NewUser = InferModel<typeof UserTable, 'insert'>
