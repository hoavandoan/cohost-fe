import type * as React from "react"
import { cn } from "../../lib/utils"
export const Container = (props: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={cn("container mx-auto", props.className)}>{props.children}</div>
}
