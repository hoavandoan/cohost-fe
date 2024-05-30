"use client"

import { type Locale, i18n } from "@/i18n-config"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@cohost/ui/select"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useTransition } from "react"

const LocaleSwitcher = ({ locale }: { locale: Locale }) => {
	const [isPending, startTransition] = useTransition()
	const pathName = usePathname()
	const router = useRouter()
	const redirectedPathName = useCallback(
		(locale: Locale) => {
			if (!pathName) return "/"

			const segments = pathName.split("/")
			segments[1] = locale
			return segments.join("/")
		},
		[locale]
	)

	const onValueChange = (locale: Locale) => {
		startTransition(() => {
			router.push(redirectedPathName(locale))
		})
	}

	return (
		<>
			<Select defaultValue={locale} onValueChange={onValueChange}>
				<SelectTrigger className="w-[100px]">
					<SelectValue placeholder="Locale" />
				</SelectTrigger>
				<SelectContent>
					{i18n.locales.map((locale) => (
						<SelectItem key={locale} value={locale}>
							{locale}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	)
}

export default LocaleSwitcher
