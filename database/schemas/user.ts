import { InferModel } from 'drizzle-orm'
import { pgEnum, pgTable, text, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

import { dateTimeColumn, primaryKeyColumn } from '..'

export const roleEnum = pgEnum('role', ['user', 'admin'])

export const UserTable = pgTable('users', {
  id: primaryKeyColumn('id'),
  email: text('email').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  role: roleEnum('role').default('user').notNull(),
  createdAt: dateTimeColumn('created_at', true),
  updatedAt: dateTimeColumn('updated_at', true),
})

export const insertUserSchema = createInsertSchema(UserTable, {
  email: z.string().email(),
  role: z.enum(['admin', 'user']),
}).omit({ id: true })

export type User = InferModel<typeof UserTable, 'select'>
