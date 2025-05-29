import { nanoid } from 'nanoid'
import { hash } from 'bcryptjs'

export async function createUser(
	email: string,
	password: string,
): Promise<any> {
	// Simulate user creation logic
	// In a real application, this would interact with a database or an external service
	await new Promise(resolve => setTimeout(resolve, 500)) // Simulate delay

	const hashedPassword = await hash(password, 10)
	const id = nanoid()

	console.log('hashedPassword:', hashedPassword)
	console.log(`Creating user with ID: ${id}`)
	console.log(`Creating user with email: ${email}`)

	return { id, email }
}
