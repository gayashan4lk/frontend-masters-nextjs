import Link from 'next/link'

export default function Page() {
	return (
		<div>
			<div className="mt-4">
				<Link href={`/issues/new`} className="text-blue-600 hover:underline">
					Create a new issue
				</Link>
			</div>
			<div className="mt-4">
				<Link href={`/issues/1`} className="text-blue-600 hover:underline">
					Go to issue 1
				</Link>
			</div>
			<div className="mt-4">
				<Link href={`/`} className="text-blue-600 hover:underline">
					Go to home
				</Link>
			</div>
		</div>
	)
}
