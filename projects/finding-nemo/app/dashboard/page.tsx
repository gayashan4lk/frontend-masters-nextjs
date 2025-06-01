import { getCurrentUser, getIssuesByUserId } from '@/lib/data'
import Link from 'next/link'
import Button from '@/app/components/ui/Button'
import { PlusIcon } from 'lucide-react'
import { Suspense } from 'react'

export default async function Page() {
	// try {

	// 	console.log('#dashboard / Current user:', user)
	// } catch (e) {
	// 	console.error(e)
	// }

	const user = await getCurrentUser()
	const issues = await getIssuesByUserId(user?.id || '')

	return (
		<div>
			{/* {user && (
				<div>
					<h2>{user.email}</h2>
				</div>
			)} */}

			<Suspense fallback={<span>Loading issues...</span>}>
				{issues && issues.length > 0 ? (
					<div className="mt-6">
						<ul className="space-y-4">
							{issues.map(issue => (
								<li
									key={issue.id}
									className="p-4 border border-gray-200 rounded-lg">
									<h3 className="text-lg font-semibold">{issue.title}</h3>
									<p className="text-gray-600">{issue.description}</p>
									<p className="text-sm text-gray-500">
										Created at: {new Date(issue.createdAt).toLocaleDateString()}
									</p>
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className="flex flex-col items-center justify-center py-12 text-center border border-gray-200 rounded-lg bg-white p-8">
						<h3 className="text-lg font-medium mb-2">No issues found</h3>
						<p className="text-gray-500 mb-6">
							Get started by creating your first issue.
						</p>
						<Link href="/issues/new">
							<Button>
								<span className="flex items-center">
									<PlusIcon size={18} className="mr-2" />
									Create Issue
								</span>
							</Button>
						</Link>
					</div>
				)}
			</Suspense>
		</div>
	)
}
