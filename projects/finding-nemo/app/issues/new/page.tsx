import Link from 'next/link'

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-2xl font-bold">Create a new issue</h1>
			<form className="flex flex-col gap-4 mt-4">
				<input
					type="text"
					placeholder="Title"
					className="border border-gray-300 rounded p-2 w-full"
				/>
				<textarea
					placeholder="Description"
					className="border border-gray-300 rounded p-2 w-full h-32"
				/>
				<button
					type="submit"
					className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition">
					Create Issue
				</button>
			</form>
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
