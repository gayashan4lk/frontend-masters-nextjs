import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<div className="w-full flex flex-row gap-4">
				<Link href={'/dashboard'} className="text-blue-600 hover:underline">
					Dashboard
				</Link>
				<Link href={'/issues'} className="text-blue-600 hover:underline">
					Issues
				</Link>
				<Link href={'/about-us'} className="text-blue-600 hover:underline">
					About Us
				</Link>
				<Link href={'/contact-us'} className="text-blue-600 hover:underline">
					Contact Us
				</Link>
			</div>
			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="text-xl">Wecome to project</h1>
				<h1 className="text-7xl font-bold">Finding Nemo</h1>
			</div>
		</div>
	)
}
