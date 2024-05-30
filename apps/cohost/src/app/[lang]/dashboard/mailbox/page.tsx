import { columns } from "@/app/[lang]/dashboard/mailbox/_components/columns"
import { DataTable } from "@/app/[lang]/dashboard/mailbox/_components/data-table"
import { TaskMock } from "@/app/[lang]/dashboard/mailbox/data/task-mock"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@cohost/ui/breadcrumb"
import type { Metadata } from "next"
import Link from "next/link"
import { z } from "zod"

const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	status: z.string(),
	label: z.string(),
	priority: z.string()
})

type Task = z.infer<typeof taskSchema>
export const metadata: Metadata = {
	title: "Tasks",
	description: "A task and issue tracker build using Tanstack Table."
}

// Simulate a database read for tasks.
async function getTasks() {
	return z.array(taskSchema).parse(TaskMock)
}

const Page = async () => {
	const tasks = await getTasks()

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
							<BreadcrumbPage>Mailbox</BreadcrumbPage>
						</BreadcrumbLink>
					</BreadcrumbItem>
					{/*<BreadcrumbSeparator />*/}
					{/*<BreadcrumbItem>*/}
					{/*	<BreadcrumbPage>Users</BreadcrumbPage>*/}
					{/*</BreadcrumbItem>*/}
				</BreadcrumbList>
			</Breadcrumb>
			<div className="w-full h-full flex-1 flex-col space-y-8 p-8 md:flex">
				<DataTable data={tasks} columns={columns} />
			</div>
		</div>
	)
}

export default Page
