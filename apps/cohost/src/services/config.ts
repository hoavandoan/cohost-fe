import type { RequestParams } from "@cohost/services/src/http-client"
import { Api } from "./api"

const securityWorker = async () => {
	return {
		headers: {
			accept: "application/json;charset=UTF-8",
			"Content-type": "application/json"
		}
	}
}

const api = (props: RequestParams) => {
	const { baseUrl, ...rest } = props

	return new Api({
		securityWorker,
		baseApiParams: {
			headers: {
				Accept: "application/json",
				...rest.headers
			},
			...rest
		},
		baseUrl
	})
}

export const baseApi: Api<unknown> = api({ baseUrl: process.env.BASE_URL })
