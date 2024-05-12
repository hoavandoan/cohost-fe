import { LogOut, PanelsTopLeft } from "lucide-react";
import Link from "next/link";

import { Menu } from "@/app/[lang]/dashboard/_components/Menu";
import { SidebarToggle } from "@/app/[lang]/dashboard/_components/SidebarToggle";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { Button } from "@cohost/ui/button";
import { cn } from "@cohost/ui/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@cohost/ui/tooltip";

export function Sidebar() {
	const sidebar = useSidebarToggle();

	return (
		<aside
			className={cn(
				"fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
				sidebar?.isOpen === false ? "w-[90px]" : "w-72",
			)}
		>
			<SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
			<div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-slate-800">
				<Button
					className={cn(
						"transition-transform ease-in-out duration-300 mb-1",
						sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0",
					)}
					variant="link"
					asChild
				>
					<Link href="/dashboard" className="flex items-center gap-2">
						<PanelsTopLeft className="w-6 h-6 mr-1" />
						<h1
							className={cn(
								"font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
								sidebar?.isOpen === false ? "-translate-x-96 opacity-0 hidden" : "translate-x-0 opacity-100",
							)}
						>
							Cohost AI
						</h1>
					</Link>
				</Button>
				<Menu isOpen={sidebar?.isOpen} />
				<div className="w-full">
					<TooltipProvider disableHoverableContent>
						<Tooltip delayDuration={100}>
							<TooltipTrigger asChild>
								<Button onClick={() => {}} variant="outline" className="w-full justify-center h-10 mt-4">
									<span className={cn(sidebar?.isOpen === false ? "" : "mr-4")}>
										<LogOut size={18} />
									</span>
									<p
										className={cn("whitespace-nowrap", sidebar?.isOpen === false ? "opacity-0 hidden" : "opacity-100")}
									>
										Sign out
									</p>
								</Button>
							</TooltipTrigger>
							{sidebar?.isOpen === false && <TooltipContent side="right">Sign out</TooltipContent>}
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>
		</aside>
	);
}
