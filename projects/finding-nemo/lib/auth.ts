import { nanoid } from 'nanoid'
import { compare, hash } from 'bcryptjs'
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
		// Generate a JWT token for the user
		const token = await new jose.SignJWT({ userId })
			.setProtectedHeader({ alg: 'HS256' })
			.setIssuedAt()
			.setExpirationTime(JWT_EXPIRATION)
			.sign(JWT_SECRET)

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

		console.log(
			'#createSession / cookieStore.auth_token:',
			cookieStore.get('auth_token'),
		)
		console.log('#createSession / Session created successfully:', {
			userId,
			token,
		})

		return true
	} catch (error) {
		console.error('Error creating session:', error)
		return false
	}
}

export async function verifyPassword(
	password: string,
	hashedPassword: string,
): Promise<boolean> {
	return compare(password, hashedPassword)
}

export async function getSession() {
	try {
		const cookieStore = await cookies()
		console.log('#getSession / cookieStore:', cookieStore)
		const token = cookieStore.get('auth_token')?.value

		if (!token) {
			return null
		}

		const { payload } = await jose.jwtVerify(token, JWT_SECRET)

		return payload as JWTPayload
	} catch (error) {
		console.error('Error verifying session:', error)
		return null
	}
}


