import type { ReactNode } from "react"

type SidebarType = {
	id: number
	title: string
	description?: string
	href: string
	icon?: ReactNode
	children?: SidebarType[]
}
export const SIDEBAR_CONFIG: SidebarType[] = [
	{
		id: 1,
		title: "Solutions",
		href: "#",
		children: [
			{
				id: 11,
				title: "Home stay, Villa, Resort, Apartment chains",
				description: "Solution for home stay owners, villas, resorts, apartment chains",
				href: "#"
			},
			{
				id: 12,
				title: "Home stay, Villa, Resort, Apartment chains",
				description: "Solution for home stay owners, villas, resorts, apartment chains",
				href: "#"
			}
		]
	},
	{
		id: 2,
		title: "Product",
		href: "#",
		children: [
			{
				id: 21,
				title: "Website",
				description: "Website builder and design",
				href: "#"
			}
		]
	},
	{
		id: 3,
		title: "Blog",
		href: "/blog"
	},
	{
		id: 4,
		title: "Pricing",
		href: "/pricing"
	},
	{
		id: 4,
		title: "More",
		href: "#",
		children: [
			{
				id: 51,
				title: "About us",
				href: "/about"
			},
			{
				id: 52,
				title: "Academy",
				href: "/academy"
			},
			{
				id: 53,
				title: "Contact",
				href: "/contact"
			},
			{
				id: 54,
				title: "FAQ",
				href: "/faq"
			}
		]
	}
]
