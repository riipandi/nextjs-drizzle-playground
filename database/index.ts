import dotenv from 'dotenv'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

dotenv.config()

export const pgClient = postgres(process.env.DATABASE_URL!, {
  /* options */
})

export const db: PostgresJsDatabase = drizzle(pgClient, {
  logger: process.env.NODE_ENV !== 'production',
})

export { sql } from 'drizzle-orm/sql'
