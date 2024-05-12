import { getDictionary } from "@/actions/get-dictionary";
import LocaleSwitcher from "@/app/[lang]/dashboard/_components/LocaleSwitcher";
import type { Locale } from "@/i18n-config";
import { Button } from "@cohost/ui/button";
import { Container } from "@cohost/ui/container";
import Link from "next/link";
export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);

	return (
		<section>
			<Container>
				{dictionary.home.welcome}
				<Button variant={"link-hover"} asChild>
					<Link href={"/dashboard"}>Dashboad</Link>
				</Button>
				<LocaleSwitcher locale={lang} />
			</Container>
		</section>
	);
}
