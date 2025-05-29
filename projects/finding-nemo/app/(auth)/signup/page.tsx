'use client'

import { useActionState } from 'react'
import { useState } from 'react'
import Button from '@/app/components/ui/Button'
import {
	Form,
	FormGroup,
	FormLabel,
	FormInput,
	FormError,
} from '@/app/components/ui/Form'
import Link from 'next/link'
import type { ActionResponse } from '@/app/actions/auth'
import { signUp } from '@/app/actions/auth'

const initialState: ActionResponse = {
	success: false,
	message: '',
	error: undefined,
}

export default function Page() {
	const [state, formAction, isPending] = useActionState(signUp, initialState)
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	return (
		<div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h1 className="text-center text-3xl font-extrabold">{state.message}</h1>
				<h2 className="mt-2 text-center text-2xl font-bold ">
					Create a new account
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
					<Form action={formAction}>
						<FormGroup>
							<FormLabel htmlFor="email">Email</FormLabel>
							<FormInput id="email" name="email" />
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
						<FormGroup>
							<FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
							<div className="relative flex items-center">
								<FormInput
									id="confirmPassword"
									name="confirmPassword"
									type={showConfirmPassword ? 'text' : 'password'}
								/>
								<button
									type="button"
									className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 focus:outline-none"
									onClick={() => setShowConfirmPassword(v => !v)}>
									{showConfirmPassword ? 'Hide' : 'Show'}
								</button>
							</div>
						</FormGroup>
						<div>
							<Button type="submit">Sign up</Button>
						</div>
					</Form>

					<div className="text-center flex flex-row gap-2 items-center mt-4">
						<p className="text-sm text-gray-600">Already have an account?</p>
						<Link
							href="/signin"
							className="font-medium text-gray-900 hover:text-gray-700">
							Sign in
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
