import React from 'react'
import AvatarStatus from 'components/shared-components/AvatarStatus'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'antd'
import { FolderOutlined } from '@ant-design/icons';

const usageStr = `import React from 'react'
import AvatarStatus from 'components/shared-components/AvatarStatus'
import { FolderOutlined } from '@ant-design/icons';

export default const Demo = () =>  (
	<>
		<div className="mb-3">
			<AvatarStatus 
				src="http://enlink.themenate.net/assets/images/avatars/thumb-3.jpg" 
				name="Terrance Moreno"
				subTitle="Software Engineer"
			/>
		</div>
		<div className="mb-3">
			<AvatarStatus 
				icon={<FolderOutlined />}
				name="Terrance Moreno"
				type="cyan"
				subTitle="Software Engineer"
			/>
		</div>
		<div className="mb-3">
			<AvatarStatus 
				text="TM"
				type="blue"
				name="Terrance Moreno"
				subTitle="Software Engineer"
			/>
		</div>
	</>
)`

const Demo = () => {

	const handleClick = (data) => {
		console.log(data)
	}

	return (
		<>
		<div className="mb-3">
			<AvatarStatus 
				src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
				name="Terrance Moreno"
				subTitle="Software Engineer"
			/>
		</div>
		<div className="mb-3">
			<AvatarStatus 
				icon={<FolderOutlined />}
				name="Terrance Moreno"
				type="cyan"
				subTitle="Software Engineer"
			/>
		</div>
		<div className="mb-3">
			<AvatarStatus 
				text="TM"
				type="blue"
				name="Terrance Moreno"
				subTitle="Software Engineer"
			/>
		</div>
		<div className="mb-3">
			<AvatarStatus 
				src="http://enlink.themenate.net/assets/images/avatars/thumb-3.jpg" 
				name="Name Clickable"
				subTitle="Software Engineer"
				id={1}
				onNameClick={e => handleClick(e)}
			/>
		</div>
	</>
	)
}

const AvatarStatusDemo = () => {
	return (
		<div>
			<h2>AvatarStatus</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/AvatarStatus.js"/>
				<ComponentIntro name="Description" desc="AvatarStatus allow you to add additional info on top of Avatar component"/>
			</div>
			<div className="mt-4">
				<Card title="Example">
					<Demo />
					<div className="mt-4">
						<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
							{usageStr}
						</SyntaxHighlighter>
					</div>
				</Card>
				<h4 className="mt-4">Props</h4>
				<div className="api-container border-0 p-0">
					<table>
						<thead>
							<tr>
								<th>Property</th>
								<th>Description</th>
								<th>Type</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>name</td>
								<td>Main display title</td>
								<td>string</td>
							</tr>
							<tr>
								<td>subTitle</td>
								<td>Sub display title</td>
								<td>string</td>
							</tr>
							<tr>
								<td>suffix</td>
								<td>The suffix node of value</td>
								<td>string | ReactNode</td>
							</tr>
							<tr>
								<td>id</td>
								<td>identifier for the avatar</td>
								<td>string | number</td>
							</tr>
							<tr>
								<td>type</td>
								<td>Color of the avatar</td>
								<td>string</td>
							</tr>
							<tr>
								<td>src</td>
								<td>The address of the image for an image avatar</td>
								<td>string</td>
							</tr>
							<tr>
								<td>icon</td>
								<td>Custom icon type for an icon avatar</td>
								<td>ReactNode</td>
							</tr>
							<tr>
								<td>size</td>
								<td>The size of the avatar</td>
								<td>number | large | small | default</td>
							</tr>
							<tr>
								<td>shape</td>
								<td>The shape of avatar</td>
								<td>circle | square</td>
							</tr>
							<tr>
								<td>gap</td>
								<td>Letter type unit distance between left and right sides</td>
								<td>number</td>
							</tr>
							<tr>
								<td>text</td>
								<td>Letter in Avatar</td>
								<td>string | ReactNode</td>
							</tr>
							<tr>
								<td>onNameClick</td>
								<td>Handler click on name</td>
								<td>() => {'{'} name, subTitle, src, id {'}'}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default AvatarStatusDemo
