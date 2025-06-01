import { Suspense } from 'react'
import DashboardSkeleton from '../components/DashboardSkeleton'
import Navigation from '../components/Navigation'
import Link from 'next/link'
import Button from '../components/ui/Button'
import { PlusIcon } from 'lucide-react'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex min-h-screen">
			<Navigation />
			<main className="mx-8">
				<h1 className="text-2xl font-bold">Issues</h1>
				<Link href="/issues/new">
					<Button>
						<span className="flex items-center">
							<PlusIcon size={18} className="mr-2" /> New Issues
						</span>
					</Button>
				</Link>
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
				{/* {children} */}
			</main>
		</div>
	)
}
