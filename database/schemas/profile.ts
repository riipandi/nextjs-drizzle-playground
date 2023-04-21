import { InferModel } from 'drizzle-orm'
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

import { UserTable as user } from './user'

export const ProfileTable = pgTable('profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => user.id),
  bio: text('bio').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Profile = InferModel<typeof ProfileTable>

export type NewProfile = InferModel<typeof ProfileTable, 'insert'>
