"use client";

import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CollapseMenuButton } from "@/app/[lang]/dashboard/_components/CollapseMenuButton";
import { getSidebars } from "@/lib/sidebar";
import { Button } from "@cohost/ui/button";
import { cn } from "@cohost/ui/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@cohost/ui/tooltip";
import { ScrollArea } from '@cohost/ui/scroll-area';

interface MenuProps {
	isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
	const pathname = usePathname();
	const pages = getSidebars(pathname);

	return (
		<ScrollArea className="[&>div>div[style]]:!block flex-grow">
			<nav className="mt-4 h-full w-full">
				<ul className="flex flex-col items-start space-y-1 px-2 h-full">
					{pages.map(({ groupLabel, menus }, index) => (
						<li className={cn("w-full")} key={index}>
							{(isOpen && groupLabel) || isOpen === undefined ? (
								<p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
									{groupLabel}
								</p>
							) : !isOpen && isOpen !== undefined && groupLabel ? (
								<TooltipProvider>
									<Tooltip delayDuration={100}>
										<TooltipTrigger className="w-full">
											<div className="w-full flex justify-center items-center">
												<Ellipsis className="h-5 w-5" />
											</div>
										</TooltipTrigger>
										<TooltipContent side="right">
											<p>{groupLabel}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							) : null}
							{menus.map(({ href, label, icon: Icon, active, submenus }, index) =>
								submenus.length === 0 ? (
									<div className="w-full" key={index}>
										<TooltipProvider disableHoverableContent>
											<Tooltip delayDuration={100}>
												<TooltipTrigger asChild>
													<Button
														variant={active ? "secondary" : "ghost"}
														className="w-full justify-start h-10 mb-1"
														asChild
													>
														<Link href={href}>
															<span className={cn(isOpen === false ? "" : "mr-4")}>
																<Icon size={18} />
															</span>
															<p
																className={cn(
																	"max-w-[200px] truncate",
																	isOpen === false ? "-translate-x-96 opacity-0" : "translate-x-0 opacity-100",
																)}
															>
																{label}
															</p>
														</Link>
													</Button>
												</TooltipTrigger>
												{isOpen === false && <TooltipContent side="right">{label}</TooltipContent>}
											</Tooltip>
										</TooltipProvider>
									</div>
								) : (
									<div className="w-full" key={index}>
										<CollapseMenuButton icon={Icon} label={label} active={active} submenus={submenus} isOpen={isOpen} />
									</div>
								),
							)}
						</li>
					))}
				</ul>
			</nav>
		</ScrollArea>
	);
}
