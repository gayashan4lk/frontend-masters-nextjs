import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center  px-6">
			<h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
			<h2 className="text-2xl font-semibold text-gray-800 mb-2">
				Page Not Found
			</h2>
			<p className="text-gray-600 mb-6 text-center">
				Oops! The page you're looking for doesn't exist or has been moved.
			</p>
			<Link
				href="/"
				className="text-white bg-blue-600 hover:bg-blue-700 font-medium px-6 py-2 rounded-lg transition">
				Go Back Home
			</Link>
		</div>
	)
}
