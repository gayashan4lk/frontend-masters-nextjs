'use client'

import { submitForm } from '@/app/actions/formSubmit'
import { useActionState } from 'react'
import type { submitFormResponse } from '@/app/actions/formSubmit'

const initialState: submitFormResponse = {
	success: false,
	message: '',
}

export default function Page() {
	const [state, formAction, isPending] = useActionState(
		submitForm,
		initialState,
	)

	return (
		<div className="mx-8">
			<h1>This is a demostration of useActionState</h1>
			<h1>Form Submitted: {state?.message}</h1>
			<form action={formAction}>
				<input
					type="text"
					name="email"
					className="border-2 border-gray-300 p-1 rounded-md"
				/>
				<button
					type="submit"
					className="bg-slate-300 py-2 px-4 rounded cursor-pointer hover:bg-slate-400"
					disabled={isPending}>
					{isPending ? 'Submitting...' : 'Submit'}
				</button>
			</form>
		</div>
	)
}
