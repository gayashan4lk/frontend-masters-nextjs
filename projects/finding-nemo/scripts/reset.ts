import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { users } from '@/db/schema'
import { hash } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import 'dotenv/config'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle({ client: sql })

async function main() {
	console.log('Starting cleaning database...')

	console.log('Deleting users...')
	await db.delete(users)

	console.log('Database cleaning completed!')
}

main()
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
	.finally(async () => {
		console.log('reset script finished')
	})
