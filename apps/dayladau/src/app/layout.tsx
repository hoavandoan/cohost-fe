import { cn } from "@cohost/ui/lib/utils";
import "@cohost/ui/styles.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Cohost",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={"en"} suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
		</html>
	);
}