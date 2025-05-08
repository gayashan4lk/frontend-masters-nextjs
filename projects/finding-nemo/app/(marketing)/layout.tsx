import Link from 'next/link'

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="border-b">
				<div className="container mx-auto">
					<Link href={'/'} className="text-xl font-bold hover:text-purple-600">
						Find Nemo
					</Link>
					<nav>
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
					<div>
						<Link href={'/signin'}>Sign In</Link>
						<Link href={'/signup'}>Sign Up</Link>
					</div>
				</div>
			</header>
			<main className="container mx-auto">{children}</main>
		</div>
	)
}
