import Link from 'next/link'

interface NavLinkProps {
	href: string
	icon: React.ReactNode
	label: string
}

export default function NavLink({ href, icon, label }: NavLinkProps) {
	return (
		<Link href={href} className="flex items-center space-x-2">
			<span>{icon}</span>
			<span>{label}</span>
		</Link>
	)
}
