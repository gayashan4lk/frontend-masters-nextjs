import { db } from '@/db'
import { issues, users } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'
import { getSession } from './auth'
import { mockDelay } from './utils'

export async function getUserByEmail(email: string) {
	try {
		const result = await db
			.select()
			.from(users)
			.where(eq(users.email, email))
			.limit(1)
		return result[0] || null
	} catch (error) {
		console.error('Error fetching user by email:', error)
		return null
	}
}

export async function getCurrentUser() {
	mockDelay(5000)
	const session = await getSession()

	if (!session) return null
	if (!session.userId) {
		console.error('Session does not have a userId:', session)
		return null
	}

	if (
		typeof window === 'undefined' &&
		process.env.NEXT_PHASE === 'phase-production-build'
	) {
		return null
	}

	console.log('#getCurrentUser / Current session:', session)

	try {
		const user = await db
			.select()
			.from(users)
			.where(eq(users.id, session.userId))
			.limit(1)

		if (!user || user.length === 0) {
			console.error('No user found for the current session:', session)
			return null
		}

		return user[0]
	} catch (error) {
		console.error('Error fetching user by session:', error)
		throw error
	}
}

export async function getIssuesByUserId(userId: string) {
	try {
		const result = await db
			.select()
			.from(issues)
			.where(eq(issues.userId, userId))
			.orderBy(desc(issues.createdAt))

		return result
	} catch (e) {
		console.error('Error fetching issues by userId:', e)
		return []
	}
}