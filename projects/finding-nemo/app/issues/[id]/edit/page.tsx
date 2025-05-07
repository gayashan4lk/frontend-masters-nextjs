import Link from 'next/link'

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return (
		<div>
			<h1>Edit issue: {id}</h1>
			<div className="mt-4">
				<Link href={`/issues/${id}`} className="text-blue-600 hover:underline">
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
