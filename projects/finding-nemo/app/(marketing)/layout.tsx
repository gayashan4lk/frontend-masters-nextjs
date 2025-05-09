import Link from 'next/link'

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="border-b bg-slate-100 border-slate-200">
				<div className="container mx-auto my-2">
					<div className="flex flex-row justify-between">
						<Link
							href={'/'}
							className="text-xl font-bold hover:text-purple-600">
							Find Nemo
						</Link>
						<nav className="flex flex-row gap-3 items-center">
							<Link
								href={'/about-us'}
								className="text-sm font-medium hover:text-purple-600">
								About Us
							</Link>
							<Link
								href={'/contact-us'}
								className="text-sm font-medium hover:text-purple-600">
								Contact Us
							</Link>
						</nav>
						<div className="flex flex-row gap-3 items-center">
							<Link
								href={'/signin'}
								className="text-sm font-medium hover:text-purple-600">
								Sign In
							</Link>
							<Link
								href={'/signup'}
								className="text-sm font-medium hover:text-purple-600">
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</header>
			<main className="container mx-auto flex-1">{children}</main>
			<footer className="border-b bg-slate-50 border-slate-100">
				<div className="container mx-auto my-4 flex flex-row justify-between">
					<p className="text-sm text-gray-500">
						A modern project management tool built with Next.js.
					</p>
					<p className="text-sm text-gray-500">
						&copy; 2025 Find Nemo. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}
