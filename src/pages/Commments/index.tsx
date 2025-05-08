import { getAllComments } from "../../network/comments"
import { useApiGet } from "../../network/useApi"

export default function Comments () {
	const {data, error, isError} = useApiGet({key: ["commments"],fn: getAllComments})
	console.log(data)
	console.log("Error: ", isError, error?.message)
	return <h1>Comments</h1>
}
