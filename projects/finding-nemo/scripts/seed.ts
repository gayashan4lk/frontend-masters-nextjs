import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { users } from '@/db/schema'
import { hash } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import 'dotenv/config'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle({ client: sql })

async function main() {
	console.log('Starting seeding database...')

	console.log('Deleting users...')
	await db.delete(users)

	const demoPassword = await hash('demo123', 10)
	const adminUserId = uuidv4()

	const adminUser = await db
		.insert(users)
		.values({
			id: adminUserId,
			email: 'admin3@example.com',
			password: demoPassword,
		})
		.returning()
		.then(rows => rows[0])

	console.log('Admin user created:', adminUser)

	console.log('Database seeding completed!')
}

main()
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
	.finally(async () => {
		console.log('seed script finished')
	})
