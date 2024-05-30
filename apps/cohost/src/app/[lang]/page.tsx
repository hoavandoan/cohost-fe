import { getDictionary } from "@/actions/get-dictionary"
import type { Locale } from "@/i18n-config"
import { Container } from "@cohost/ui/container"
export default async function Home({
	params: { lang }
}: {
	params: { lang: Locale }
}) {
	const dictionary = await getDictionary(lang)

	return (
		<main>
			<Container className={"my-10"}>Content home</Container>
		</main>
	)
}
