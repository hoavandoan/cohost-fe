"use client"

import { getSidebars } from "@/lib/sidebar"
import { usePathname } from "next/navigation"

export function PageTitle() {
	const pathname = usePathname()
	const pages = getSidebars(pathname)

	const pageTitle = pages.map(({ menus }) => {
		const activeMenu = menus.find((menu) => menu.active)
		return activeMenu?.submenus && activeMenu.submenus.length > 0
			? activeMenu.submenus.find((submenu) => submenu.active)?.label
			: activeMenu?.label ?? ""
	})

	return <h1 className="font-bold">{pageTitle}</h1>
}
