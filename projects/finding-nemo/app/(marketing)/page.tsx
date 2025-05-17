import Link from 'next/link'

export default function Page() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
			<div className="text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
					Issue tracking <br className="hidden sm:block" />
					<span className="text-purple-600 dark:text-purple-500">
						simplified
					</span>
				</h1>
				<p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
					A minimal and elegant issue tracking tool for modern teams. Manage
					your projects with ease.
				</p>
				<div className="mt-10">
					<Link
						href="/signup"
						className="font-medium p-4 bg-purple-500 text-white rounded-3xl hover:bg-purple-600">
						Get Started
					</Link>
				</div>
			</div>
		</div>
	)
}
