import { Button, Form, Input } from "antd"
import React from "react"
import { FormProps } from "react-router-dom"
import { useApiSend } from "../../network/useApi"
import { createPost } from "../../network/posts"
import { Post } from "../../network/posts"

type FieldType = {
	userId: number,
	title: string,
	body: string,
}

export default function CreatePost () {
	const key: string[] = ["posts"]
	const {mutate, contextHolder} = useApiSend({fn: createPost, invalidatedKeys: key})

	const onFinish = ( values: FieldType ) => {
		mutate(values)	
	}

	function sucess (response: unknown) {
		return "Post criado com sucesso!"
	}

	return (<>
		<Button>
			Create
		</Button>
		{contextHolder}
		<Form
			onFinish={onFinish}
		>
			<Form.Item 
				label="Title"
				name="title"
			>
				<Input />
			</Form.Item>
			<Form.Item 
				label="Body"
				name="body"
			>
				<Input />
			</Form.Item>
			<Form.Item 
				label="User ID"
				name="userId"
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	</>)
}
