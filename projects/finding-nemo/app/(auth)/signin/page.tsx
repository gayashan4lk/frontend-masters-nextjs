'use client'

import { ActionResponse, signIn } from '@/app/actions/auth'
import Button from '@/app/components/ui/Button'
import { Form, FormGroup, FormInput, FormLabel } from '@/app/components/ui/Form'
import Link from 'next/link'
import { useActionState, useState } from 'react'

const initialState: ActionResponse = {
	success: false,
	message: '',
	error: undefined,
}

export default function Page() {
	const [state, formAction, isPending] = useActionState(signIn, initialState)
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-2 text-center text-2xl font-bold text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
					<Form action={formAction}>
						<FormGroup>
							<FormLabel htmlFor="email">Email</FormLabel>
							<FormInput id="email" name="email" type="email" required />
						</FormGroup>
						<FormGroup>
							<FormLabel htmlFor="password">Password</FormLabel>
							<div className="relative flex items-center">
								<FormInput
									id="password"
									name="password"
									type={showPassword ? 'text' : 'password'}
								/>
								<button
									type="button"
									className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 focus:outline-none"
									onClick={() => setShowPassword(v => !v)}>
									{showPassword ? 'Hide' : 'Show'}
								</button>
							</div>
						</FormGroup>
						<div>
							<Button type="submit">Sign in</Button>
						</div>
					</Form>
					<div className="text-center flex flex-row gap-2 items-center justify-center">
						<p className="text-sm text-gray-600">Don&apos;t have an account?</p>
						<Link
							href="/signup"
							className="font-medium text-gray-900 hover:text-gray-700">
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
