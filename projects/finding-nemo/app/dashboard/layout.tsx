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
			<main className="">
				<Suspense fallback={<DashboardSkeleton />}>{children}</Suspense>
			</main>
		</div>
	)
}
