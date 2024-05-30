import LocaleSwitcher from "@/app/[lang]/dashboard/_components/locale-switcher"
import Navigation from "@/app/components/navigation"
import type { Locale } from "@/i18n-config"
import { Button } from "@cohost/ui/button"
import { Container } from "@cohost/ui/container"

const Header = ({ lang }: { lang: Locale }) => {
	return (
		<header>
			<Container className={"flex items-center justify-between py-2 h-20"}>
				<div>Logo</div>
				<Navigation />

				<div className={"flex items-center justify-between gap-2"}>
					<LocaleSwitcher locale={lang} />
					<Button variant={"outline"} size={"lg"}>
						Sign in
					</Button>
					<Button size={"lg"}>Sign up</Button>
				</div>
			</Container>
		</header>
	)
}

export default Header
