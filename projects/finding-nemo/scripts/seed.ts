import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { issues, users } from '@/db/schema'
import { hash } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import 'dotenv/config'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle({ client: sql })

async function main() {
	console.log('Starting seeding database...')

	console.log('Deleting users...')
	await db.delete(users)

	console.log('Deleting issues...')
	await db.delete(issues)

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

	const demoIssues = [
		{
			title: 'Implement user authentication',
			description:
				'Set up NextAuth.js for user authentication and create signin/signup pages.',

			userId: adminUserId,
		},
		{
			title: 'Design landing page',
			description:
				'Create a modern landing page with Tailwind CSS that explains the app features.',

			userId: adminUserId,
		},
		{
			title: 'Add dark mode support',
			description:
				'Implement dark mode toggle and ensure UI looks good in both themes.',

			userId: adminUserId,
		},
		{
			title: 'Create issue management API',
			description:
				'Build RESTful API endpoints for creating, updating and deleting issues.',
			userId: adminUserId,
		},
		{
			title: 'Implement drag and drop for issues',
			description:
				'Add drag and drop functionality to move issues between status columns.',
			userId: adminUserId,
		},
	]

	for (const issue of demoIssues) {
		await db.insert(issues).values(issue)
	}

	console.log('Demo issues created:', demoIssues)

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
