import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@cohost/ui/breadcrumb";
import Link from "next/link";

const Page = () => {
	return (
		<div>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<BreadcrumbPage>Dashboard</BreadcrumbPage>
						</BreadcrumbLink>
					</BreadcrumbItem>
					{/*<BreadcrumbSeparator />*/}
					{/*<BreadcrumbItem>*/}
					{/*	<BreadcrumbPage>Users</BreadcrumbPage>*/}
					{/*</BreadcrumbItem>*/}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default Page;
