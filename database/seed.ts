import UserSeeder from './seeders/user_seeder'

const main = async () => {
  console.log('🍀 Running database seeder...')
  await UserSeeder()
}

main()
  .then(() => {
    console.info('✅ Database has been populated!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('❌ Database seeder failed!', err)
    process.exit(1)
  })
