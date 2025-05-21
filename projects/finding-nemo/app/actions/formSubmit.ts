'use server'

export type submitFormResponse = {
	success: boolean
	message: string
}

export async function submitForm(
	prevState: submitFormResponse,
	formData: FormData,
) {
	await new Promise(resolve => setTimeout(resolve, 1000))

	const email = formData.get('email')
	console.log('Form submitted with email:', email)

	if (!email || typeof email !== 'string' || !email.includes('@')) {
		return {
			success: false,
			message: 'Invalid email address',
		}
	}

	return {
		success: true,
		message: 'Form submitted successfully',
	}
}
