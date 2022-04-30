import React, { useState } from 'react'
import Flex from 'components/shared-components/Flex'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card, Select } from 'antd'

const Demo = () => {
	const { Option } = Select;
	const arr = ['danger', 'warning', 'success']
	const alignItemsList = ['start', 'end', 'center', 'baseline', 'stretch']
	const justifyContentList = ['start', 'end', 'center', 'between', 'around', 'stretch']
	const flexDirectionList = ['row', 'column', 'row-reverse', 'column-reverse']
	const [alignItems, setAlignItems] = useState('start')
	const [justifyContent, setJustifyContent] = useState('start');
	const [flexDirection, setFlexDirection] = useState('row');
	return (
		<>
			<Flex 
				alignItems={alignItems}
				justifyContent={justifyContent}
				flexDirection={flexDirection}
			>
				<>
					{arr.map((elm, index) => (
						<div 
							key={elm} 
							className={`bg-${elm} m-2`} 
							style={{width: 40, height: index === 1 ? 25 : 40, borderRadius: 4}}
						></div>
					))}
				</>
			</Flex>
			<div className="mt-4">
				<Flex alignItems="center" mobileFlex={false}>
					<span className="font-weight-semibold mr-3">alignItems: </span>
					<Select defaultValue="start" style={{ width: 120 }} onChange={val => {setAlignItems(val)}}>
						{
							alignItemsList.map(elm => (
								<Option key={elm} value={elm}>{elm}</Option>
							))
						}
					</Select>
					<Flex alignItems="center" mobileFlex={false} className="ml-md-4">
						<span className="font-weight-semibold mr-3">justifyContent: </span>
						<Select defaultValue="start" style={{ width: 120 }} onChange={val => {setJustifyContent(val)}}>
							{
								justifyContentList.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</Flex>
					<Flex alignItems="center" mobileFlex={false} className="ml-md-4">
						<span className="font-weight-semibold mr-3">flexDirection: </span>
						<Select defaultValue="row" style={{ width: 120 }} onChange={val => {setFlexDirection(val)}}>
							{
								flexDirectionList.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</Flex>
				</Flex>
			</div>
		</>
	)
}

const usageStr = `import React, { useState } from 'react'
import Flex from 'components/shared-components/Flex'
import { Select } from 'antd'

export default const Demo = () =>  {
	const { Option } = Select;
	const arr = ['danger', 'warning', 'success']
	const alignItemsList = ['start', 'end', 'center', 'baseline', 'stretch']
	const justifyContentList = ['start', 'end', 'center', 'between', 'around', 'stretch']
	const flexDirectionList = ['row', 'column', 'row-reverse', 'column-reverse']
	const [alignItems, setAlignItems] = useState('start')
	const [justifyContent, setJustifyContent] = useState('start');
	const [flexDirection, setFlexDirection] = useState('row');
	return (
		<>
			<Flex 
				alignItems={alignItems}
				justifyContent={justifyContent}
				flexDirection={flexDirection}
			>
				<>
					{arr.map((elm, index) => (
						<div 
							key={elm} 
							className={\`bg-\${elm} m-2\`} 
							style={{width: 40, height: index === 1 ? 25 : 40, borderRadius: 4}}
						></div>
					))}
				</>
			</Flex>
			<div className="mt-4">
				<Flex alignItems="center" mobileFlex={false}>
					<span className="font-weight-semibold mr-3">alignItems: </span>
					<Select defaultValue="start" style={{ width: 120 }} onChange={val => {setAlignItems(val)}}>
						{
							alignItemsList.map(elm => (
								<Option key={elm} value={elm}>{elm}</Option>
							))
						}
					</Select>
					<Flex alignItems="center" mobileFlex={false} className="ml-md-4">
						<span className="font-weight-semibold mr-3">justifyContent: </span>
						<Select defaultValue="start" style={{ width: 120 }} onChange={val => {setJustifyContent(val)}}>
							{
								justifyContentList.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</Flex>
					<Flex alignItems="center" mobileFlex={false} className="ml-md-4">
						<span className="font-weight-semibold mr-3">flexDirection: </span>
						<Select defaultValue="row" style={{ width: 120 }} onChange={val => {setFlexDirection(val)}}>
							{
								flexDirectionList.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</Flex>
				</Flex>
			</div>
		</>
	)
}
`

const FlexDemo = () => {
	return (
		<div>
			<h2>Flex</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/Flex.js"/>
				<ComponentIntro name="Description" desc="Flex component"/>
				<div className="mt-4">
					<Card title="Example">
						<Demo />
						<div className="mt-4">
							<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
								{usageStr}
							</SyntaxHighlighter>
						</div>
					</Card>
				</div>
				<h4 className="mt-4">Props</h4>
				<div className="api-container border-0 p-0">
					<table>
						<thead>
							<tr>
								<th>Property</th>
								<th>Description</th>
								<th>Type</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>alignItems</td>
								<td>Alignment of flex items on the cross axis</td>
								<td>start, end, center, baseline, stretch</td>
								<td></td>
							</tr>
							<tr>
								<td>justifyContent</td>
								<td>Alignment of flex items on the main axis</td>
								<td>start, end, center, between, around, stretch</td>
								<td></td>
							</tr>
							<tr>
								<td>flexDirection</td>
								<td>Set the direction of flex items in a flex container</td>
								<td>row, column, row-reverse, column-reverse</td>
								<td></td>
							</tr>
							<tr>
								<td>mobileFlex</td>
								<td>Enable flex in mobile view</td>
								<td>boolean</td>
								<td>true</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default FlexDemo
