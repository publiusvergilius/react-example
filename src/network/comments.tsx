import NewRequestBuilder from "./request";

export async function getAllComments () {
	const requestBuilder = NewRequestBuilder()
	return requestBuilder.get("/comments").send()
}



