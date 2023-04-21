import dotenv from 'dotenv'
import { PgTimestampConfig, serial, timestamp, uuid } from 'drizzle-orm/pg-core'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import { sql } from 'drizzle-orm/sql'
import postgres from 'postgres'

dotenv.config()

export const pgClient = postgres(process.env.DATABASE_URL!, {
  /* options */
})

export const db: PostgresJsDatabase = drizzle(pgClient, {
  // logger: process.env.NODE_ENV !== 'production',
  logger: false,
})

export const primaryKeyColumn = (name: string, useSerial?: boolean) => {
  const defaultId = sql`gen_random_uuid()`
  return useSerial ? serial(name).primaryKey() : uuid(name).primaryKey().default(defaultId)
}

export const dateTimeColumn = (name: string, defaultNow?: boolean) => {
  const timeConfig: PgTimestampConfig = { mode: 'date', withTimezone: true }
  return defaultNow
    ? timestamp(name, timeConfig).defaultNow().notNull()
    : timestamp(name, timeConfig)
}
