import { getCurrentUser } from '@/lib/data'
import Link from 'next/link'
import Button from '../components/ui/Button'
import { PlusIcon } from 'lucide-react'

export default async function Page() {
	try {
		const user = await getCurrentUser()
		console.log('#dashboard / Current user:', user)
	} catch (e) {
		console.error(e)
	}

	return (
		<div>
			<h1 className="text-2xl font-bold">Issues</h1>
			<Link href="/issues/new">
				<Button>
					<span className="flex items-center">
						<PlusIcon size={18} className="mr-2" /> New Issues
					</span>
				</Button>
			</Link>
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
		</div>
	)
}
