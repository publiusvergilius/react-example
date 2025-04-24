import { Button, Checkbox, Divider, Flex, Grid, Layout, Modal } from "antd"
import type { CheckboxProps } from "antd"
import { useState } from "react"

export default function Playground () {
	const [isChecked, setIsChecked]=useState(false)
	const onChange: CheckboxProps['onChange'] = (e) => {
		setIsChecked(e.target.checked)
	}
	return (
		<Layout>
			<h1>Playground</h1>
			<Flex vertical wrap>
				<h4>The purpose of this page is to testing user interation</h4>
				<h4>Run `npm run test` or `npm run test:ui` to see the test results</h4>
			</Flex>
			<Divider />
			<Flex gap='middle' vertical={false} align="center">
				<Checkbox onChange={onChange} style={{fontWeight: "bold"}}>
					{"<- Make me happy"}
				</Checkbox>
				<span style={{fontSize: "32px"}} data-testid="face">{isChecked ? '😁' : '😢' }</span>
			</Flex>
			<Divider />
			<TestModal />
		</Layout>
	)
}

function TestModal () {
	const [open, setOpen] = useState(false)

	function handleOpen () {
		setOpen(prev => !prev)
	}
	return (
		<>
			<h3>Test open the Modal</h3>
			<Button data-testid='open-button' onClick={handleOpen} style={{maxWidth: "10rem"}}>Open</Button>
			<Modal data-testid='test-modal' open={open} onCancel={()=> setOpen(false)}>
				<Layout>
					<h1>Hello</h1>
					<span style={{fontSize: "32px"}}>😁</span>
				</Layout>
			</Modal>
		</>
	)
}
