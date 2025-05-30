'use server'

import { createSession, createUser, verifyPassword } from '@/lib/auth'
import { getUserByEmail } from '@/lib/data'
import { mockDelay } from '@/lib/utils'
import { create } from 'domain'

export type ActionResponse = {
	success: boolean
	message: string
	error?: string
}

export async function signUp(
	prevState: ActionResponse,
	formData: FormData,
): Promise<ActionResponse> {
	try {
		await mockDelay(700)

		const data = {
			email: formData.get('email'),
			password: formData.get('password'),
			confirmPassword: formData.get('confirmPassword'),
		}

		console.log('SignUp action:', data)

		// Validate

		// check if user already exists

		// create user
		const user = await createUser(data.email as string, data.password as string)

		if (!user) {
			return {
				success: false,
				message: 'Failed to create account',
				error: 'User creation failed',
			}
		}

		// create a session
		const isSession = await createSession(user.id)

		// return success message
		return {
			success: true,
			message: 'Account created successfully',
		}
	} catch (error: any) {
		console.error('Error signing up:', error)
		return {
			success: false,
			message: 'An error occurred while creating your account',
			error: 'Failed to create account',
		}
	}
}

export async function signIn(
	prevState: ActionResponse,
	formData: FormData,
): Promise<ActionResponse> {
	const data = {
		email: formData.get('email'),
		password: formData.get('password'),
	}

	console.log('SignIn action:', data)

	const user = await getUserByEmail(data.email as string)

	if (!user) {
		return {
			success: false,
			message: 'Invalid email or password',
			error: 'Invalid email or password',
		}
	}

	console.log('User found:', user)

	const isPasswordValid = await verifyPassword(
		data.password as string,
		user.password,
	)

	if (!isPasswordValid) {
		return {
			success: false,
			message: 'Invalid email or password',
			error: 'Invalid email or password',
		}
	}

	await createSession(user.id)

	return {
		success: true,
		message: 'Signed in successfully',
	}
}
