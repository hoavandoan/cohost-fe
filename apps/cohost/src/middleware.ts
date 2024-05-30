import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "./i18n-config"

import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

function getLocale(request: NextRequest): string | undefined {
	// Lấy thông tin từ headers
	const negotiatorHeaders: Record<string, string> = {}
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales

	// Dùng negotiator và intl-localematcher lấy languages
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

	let locale = ""
	try {
		locale = matchLocale(languages, locales, i18n.defaultLocale)
	} catch (error) {
		locale = i18n.defaultLocale
	}
	return locale
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	// Check xem pathname đã có locale chưa
	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	)

	// Redirect đến locale được detect nếu pathname chưa có
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request)

		// Url mới sẽ tự động thêm locale đã được detect
		return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
