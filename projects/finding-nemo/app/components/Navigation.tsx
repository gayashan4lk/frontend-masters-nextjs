import Link from 'next/link'
import NavLink from './NavLink'
import { HomeIcon, PlusIcon } from 'lucide-react'

export default function Navigation() {
	return (
		<aside className="flex flex-col w-16 md:w-64 bg-gray-50 border-r border-gray-200 py-4 px-2 md:px-4">
			<div className="">
				<Link href="/" className="text-xl font-bold tracking-tight">
					<span className="hidden md:inline">Mode</span>
					<span className="md:hidden">M</span>
				</Link>
			</div>

			<nav className="">
				<NavLink
					href="/dashboard"
					icon={<HomeIcon size={20} />}
					label="Dashboard"
				/>
				<NavLink
					href="/issues/new"
					icon={<PlusIcon size={20} />}
					label="New Issue"
				/>
			</nav>

			{/* <div className="pt-4 border-t border-gray-200 dark:border-dark-border-subtle">
				<Suspense
					fallback={
						<NavLink
							href="/signin"
							icon={<LogInIcon size={20} />}
							label="Sign In"
						/>
					}>
					<UserEmail />
				</Suspense>
			</div> */}
		</aside>
	)
}
