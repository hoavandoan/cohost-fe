import { HttpClient, type RequestParams } from "@cohost/services/http-client"

export class Api<SecurityDataType> extends HttpClient<SecurityDataType> {
	webflow = {
		getCollections: (params: RequestParams = {}) =>
			this.request({
				path: "/api/webflow/collections",
				method: "GET",
				...params
			})
	}
	env = {}
}
