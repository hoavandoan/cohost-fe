import {
	CalendarDays,
	CandlestickChart,
	LayoutGrid,
	LifeBuoy,
	Mailbox,
	MessageCircleIcon,
	Settings,
	SquarePen,
	Tag,
	Users,
} from "lucide-react";

type Submenu = {
	href: string;
	label: string;
	active: boolean;
};

type Menu = {
	href: string;
	label: string;
	active: boolean;
	icon: any;
	submenus: Submenu[];
};

type Group = {
	groupLabel: string;
	menus: Menu[];
};

export function getSidebars(pathname: string): Group[] {
	return [
		{
			groupLabel: "",
			menus: [
				{
					href: "/dashboard",
					label: "Dashboard",
					active: pathname.endsWith("/dashboard"),
					icon: LayoutGrid,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "",
			menus: [
				{
					href: "/dashboard/reservations",
					label: "Reservations",
					active: pathname.includes("/reservations"),
					icon: LifeBuoy,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "",
			menus: [
				{
					href: "/messages",
					label: "Messages",
					active: pathname.includes("/messages"),
					icon: MessageCircleIcon,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "",
			menus: [
				{
					href: "",
					label: "Posts",
					active: pathname.includes("/posts"),
					icon: SquarePen,
					submenus: [
						{
							href: "/posts",
							label: "All Posts",
							active: pathname === "/posts",
						},
						{
							href: "/posts/new",
							label: "New Post",
							active: pathname === "/posts/new",
						},
					],
				},
				{
					href: "/finance",
					label: "Finance",
					active: pathname.includes("/finance"),
					icon: CandlestickChart,
					submenus: [],
				},
				{
					href: "/listing",
					label: "Listing",
					active: pathname.includes("/listing"),
					icon: Tag,
					submenus: [],
				},
				{
					href: "/calendar",
					label: "Calendar",
					active: pathname.includes("/calendar"),
					icon: CalendarDays,
					submenus: [],
				},
				{
					href: "/dashboard/mailbox",
					label: "Mailbox",
					active: pathname.includes("/dashboard/mailbox"),
					icon: Mailbox,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "Settings",
			menus: [
				{
					href: "/users",
					label: "Users",
					active: pathname.includes("/users"),
					icon: Users,
					submenus: [],
				},
				{
					href: "/account",
					label: "Account",
					active: pathname.includes("/account"),
					icon: Settings,
					submenus: [],
				},
			],
		},
	];
}
