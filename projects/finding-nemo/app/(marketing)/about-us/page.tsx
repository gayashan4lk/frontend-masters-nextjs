import Link from 'next/link'

export default function Page() {
	return (
		<div className="bg-white flex items-center justify-center px-4 py-12">
			<div className="max-w-3xl text-center">
				<h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
				<p className="text-lg text-gray-600 mb-4">
					Welcome to our company! We are passionate about building innovative
					solutions that make a positive impact. Our team is made up of
					engineers, designers, and thinkers who strive for excellence in
					everything we do.
				</p>
				<p className="text-lg text-gray-600">
					Our mission is to deliver high-quality products that solve real-world
					problems. We value transparency, collaboration, and continuous
					learning.
				</p>
				<div className="mt-8">
					<Link href={'/'} className="text-blue-600 hover:underline">
						Go to home
					</Link>
				</div>
			</div>
		</div>
	)
}
