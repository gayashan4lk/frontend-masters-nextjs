import Link from 'next/link'

export default function Dashboard() {
	return (
		<div>
			<Link href={'/'} className="text-blue-600 hover:underline">
				Go to home
			</Link>

			<h1>Dashboard</h1>
			<p>Welcome to the dashboard!</p>
		</div>
	)
}
