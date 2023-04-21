import { db } from '@/database'
import { type User, UserTable } from '@/database/schemas/user'
import { jsonResponse, throwResponse } from '@/utils/response'

export const revalidate = 3600

export async function GET(_req: Request) {
  try {
    const allUsers: User[] = await db.select().from(UserTable)
    return allUsers.length > 0
      ? jsonResponse<User[]>(undefined, allUsers, 200)
      : jsonResponse('No users found', undefined, 200)
  } catch (error: any) {
    return error instanceof Response
      ? throwResponse(error.status, error.statusText)
      : throwResponse(500, error.message)
  }
}
