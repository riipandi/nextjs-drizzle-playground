import { eq } from 'drizzle-orm/expressions'

import { insertUserSchema, UserTable } from '../schemas/user'
import { db } from '..'

export default async function UserSeeder() {
  const email = 'john@example.com'
  const user = await db.select().from(UserTable).where(eq(UserTable.email, email)).execute()

  if (user.length > 0) {
    return console.error('🛑 User already exists!')
  }

  const data = insertUserSchema.parse({
    email,
    firstName: 'John',
    lastName: 'Doe',
    phone: '6280012345678',
    role: 'admin',
  })

  await db.insert(UserTable).values(data).returning().execute()
}
