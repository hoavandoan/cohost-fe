"use client" // Error components must be Client Components

import { Button } from "@cohost/ui/button"
import { useEffect } from "react"

export default function ErrorPage({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div>
			<h2>Something went wrong!</h2>
			<Button onClick={reset}>Try again</Button>
		</div>
	)
}
