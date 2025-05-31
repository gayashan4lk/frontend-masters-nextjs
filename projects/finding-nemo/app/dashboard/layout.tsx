import { Suspense } from 'react'
import DashboardSkeleton from '../components/DashboardSkeleton'
import Navigation from '../components/Navigation'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex min-h-screen">
			<Navigation />
			<main className="ml-8">
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
			</main>
		</div>
	)
}
