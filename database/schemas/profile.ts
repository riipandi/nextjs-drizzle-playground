import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

import { dateTimeColumn, primaryKeyColumn } from '..'

import { UserTable as user } from './user'

export const ProfileTable = pgTable('profiles', {
  id: primaryKeyColumn('id'),
  userId: uuid('user_id').references(() => user.id),
  bio: text('bio').notNull(),
  createdAt: dateTimeColumn('created_at', true),
  updatedAt: dateTimeColumn('updated_at', true),
})
