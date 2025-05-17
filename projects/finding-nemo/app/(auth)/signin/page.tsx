import Link from 'next/link'

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h1 className="text-center text-3xl font-extrabold text-gray-900">
					Mode
				</h1>
				<h2 className="mt-2 text-center text-2xl font-bold text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
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
