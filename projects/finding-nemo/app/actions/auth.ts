'use server'

import { createUser } from '@/lib/auth'
import { mockDelay } from '@/lib/utils'

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

		console.log('Form submitted with data:', data)

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
		//await createSession(user.id)

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
