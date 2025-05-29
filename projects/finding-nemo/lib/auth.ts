import { nanoid } from 'nanoid'
import { hash } from 'bcryptjs'
import { db } from '@/db'
import { users } from '@/db/schema'

export async function createUser(
	email: string,
	password: string,
): Promise<any> {
	const hashedPassword = await hash(password, 10)
	const id = nanoid()

	try {
		await db.insert(users).values({
			id,
			email,
			password: hashedPassword,
		})

		return { id, email }
	} catch (error) {
		console.error('Error creating user:', error)
		return null
	}
}
