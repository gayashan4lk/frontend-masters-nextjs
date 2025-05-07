import Link from 'next/link'

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return (
		<div>
			<div>My Issue: {id}</div>

			<div className="mt-4">
				<Link
					href={`/issues/${id}/edit`}
					className="text-blue-600 hover:underline">
					Edit this issue
				</Link>
			</div>

			<div className="mt-4">
				<Link href={`/issues`} className="text-blue-600 hover:underline">
					Go back
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
