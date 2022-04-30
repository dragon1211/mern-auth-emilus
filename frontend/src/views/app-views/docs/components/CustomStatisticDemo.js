import React from 'react'
import CustomStatistic from 'components/shared-components/CustomStatistic'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'antd'

const Demo = () => {
	return (
		<div className="d-flex align-items-center">
			<div className="mr-5">
				<CustomStatistic size={'lg'} value={'1,128'} title={'Active Users'}/>
			</div>
			<div className="mr-5">
				<CustomStatistic size={'md'} value={'1,128'} title={'Active Users'}/>
			</div>
			<div>
				<CustomStatistic size={'sm'} value={'1,128'} title={'Active Users'}/>
			</div>
		</div>
	)
}

const  usageStr = `import React from 'react'
import CustomStatistic from 'components/shared-components/CustomStatistic'

export default const Demo = () =>  (
	<div className="d-flex align-items-center">
		<div className="mr-5">
			<CustomStatistic size={'lg'} value={'1,128'} title={'Active Users'}/>
		</div>
		<div className="mr-5">
			<CustomStatistic size={'md'} value={'1,128'} title={'Active Users'}/>
		</div>
		<div>
			<CustomStatistic size={'sm'} value={'1,128'} title={'Active Users'}/>
		</div>
	</div>
)`

const CustomStatisticDemo = () => {
	return (
		<div>
			<h2>CustomStatistic</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/CustomStatistic.js"/>
				<ComponentIntro name="Description" desc="highlight data with description"/>
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
								<td>value</td>
								<td>Display value</td>
								<td>string | number</td>
								<td></td>
							</tr>
							<tr>
								<td>title</td>
								<td>Display title</td>
								<td>string</td>
								<td></td>
							</tr>
							<tr>
								<td>size</td>
								<td>Value size</td>
								<td>sm | md | lg</td>
								<td>md</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default CustomStatisticDemo
