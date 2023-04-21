import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { join } from 'path'

import { db } from '.'

console.info(`🏃 Running database migration...`)
console.info(`🏃 Database connection string: ${process.env.DATABASE_URL}`)

// this will automatically run needed migrations on the database
migrate(db, {
  migrationsFolder: join(__dirname, 'migration'),
  migrationsTable: '_migrations',
})
  .then(() => {
    console.info('✅ Migrations complete!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('❌ Migrations failed!', err)
    process.exit(1)
  })
