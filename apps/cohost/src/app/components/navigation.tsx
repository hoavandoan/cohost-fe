"use client"

import Link from "next/link"
import * as React from "react"

import { SIDEBAR_CONFIG } from "@/app/utils/sidebar"
import { Button } from "@cohost/ui/button"
import { cn } from "@cohost/ui/lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@cohost/ui/navigation-menu"

function Navigation() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{SIDEBAR_CONFIG.map((sidebar) => (
					<NavigationMenuItem key={sidebar.id}>
						{sidebar.children ? (
							<>
								<NavigationMenuTrigger>{sidebar.title}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
										{!!sidebar.children &&
											sidebar.children?.map((sub) => (
												<ListItem key={sub.id} title={sub.title} href={sub.href}>
													{sub.description}
												</ListItem>
											))}
									</ul>
								</NavigationMenuContent>
							</>
						) : (
							<NavigationMenuItem>
								<Link href={sidebar.href} legacyBehavior passHref>
									<Button variant={"link-hover"} asChild>
										<NavigationMenuLink className={navigationMenuTriggerStyle()}>{sidebar.title}</NavigationMenuLink>
									</Button>
								</Link>
							</NavigationMenuItem>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default Navigation

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
					</a>
				</NavigationMenuLink>
			</li>
		)
	}
)
ListItem.displayName = "ListItem"
