import Link from 'next/link'

export default function Page() {
	return (
		<div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12">
			<div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
				<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
					Contact Us
				</h1>
				<form className="space-y-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Your Name"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700">
							Message
						</label>
						<textarea
							id="message"
							rows={4}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Your message..."></textarea>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
							Send Message
						</button>
					</div>
				</form>
				<div className="mt-8">
					<Link href={'/'} className="text-blue-600 hover:underline">
						Go to home
					</Link>
				</div>
			</div>
		</div>
	)
}
