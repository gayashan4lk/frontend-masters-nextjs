'use server'

import { mockDelay } from '@/lib/utils'

export type ActionResponse = {
	success: boolean
	message: string
	error?: string
}

export async function signUp(prevState: ActionResponse, formData: FormData) {
	try {
		await mockDelay(700)

		const data = {
			email: formData.get('email'),
		}

		console.log('Form submitted with data:', data)

		// Validate

		// check if user already exists

		// create user

		// create a session

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
