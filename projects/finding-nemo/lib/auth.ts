import { nanoid } from 'nanoid'
import { hash } from 'bcryptjs'
import { db } from '@/db'
import { users } from '@/db/schema'
import * as jose from 'jose'
import { cookies } from 'next/headers'

// JWT types
interface JWTPayload {
	userId: string
	[key: string]: string | number | boolean | null | undefined
}

// JWT expiration time
const JWT_EXPIRATION = '7d'

// Secret key for JWT signing (in a real app, use an environment variable)
const JWT_SECRET = new TextEncoder().encode(
	process.env.JWT_SECRET || 'your-secret-key-min-32-chars-long!!!',
)

export async function generateJWT(payload: JWTPayload): Promise<string> {
	return await new jose.SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime(JWT_EXPIRATION)
		.sign(JWT_SECRET)
}

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

export async function createSession(userId: string) {
	try {
		const token = await generateJWT({ userId })

		const cookieStore = await cookies()

		cookieStore.set({
			name: 'auth_token',
			value: token,
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7, // 7 days
			path: '/',
			sameSite: 'lax',
		})

		console.log('cookieStore:', cookieStore.get('auth_token'))
		console.log('Session created successfully:', { userId, token })

		return true
	} catch (error) {
		console.error('Error creating session:', error)
		return false
	}
}


