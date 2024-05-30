import { forwardRef } from "react"
import type * as React from "react"
import { cn } from "../../lib/utils"
export const Center = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		return <div className={cn("flex items-center justify-center", className)} {...props} />
	}
)

Center.displayName = "Center"
