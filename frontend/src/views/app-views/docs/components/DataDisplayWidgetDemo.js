import React from 'react'
import DataDisplayWidget from 'components/shared-components/DataDisplayWidget'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'antd'
import { BarChartOutlined } from '@ant-design/icons';

const Demo = () => {
	return (
		<div className="d-flex align-items-center flex-column">
			<div style={{width: 300}}>
				<DataDisplayWidget 
					icon={<BarChartOutlined />}
					value="$11,388"
					title="Revenue"
					color="blue"
					size={'md'}
					avatarSize={50}
					vertical={false}
				/>
			</div>
			<div style={{width: 300}}>
				<DataDisplayWidget 
					icon={<BarChartOutlined />}
					value="$37,212"
					title="Net Profit"
					color="cyan"
					size={'md'}
					avatarSize={50}
					vertical={true}
				/>
			</div>
		</div>
	)
}

const  usageStr = `import React from 'react'
import DataDisplayWidget from 'components/shared-components/DataDisplayWidget'
import { BarChartOutlined } from '@ant-design/icons';

export default const Demo = () =>  (
	return (
		<div className="d-flex align-items-center flex-column">
			<div style={{width: 300}}>
				<DataDisplayWidget 
					icon={<BarChartOutlined />}
					value="$11,388"
					title="Revenue"
					color="blue"
					size={'md'}
					avatarSize={50}
					vertical={false}
				/>
			</div>
			<div style={{width: 300}}>
				<DataDisplayWidget 
					icon={<BarChartOutlined />}
					value="$37,212"
					title="Net Profit"
					color="cyan"
					size={'md'}
					avatarSize={50}
					vertical={true}
				/>
			</div>
		</div>
	)
)`

const DataDisplayWidgetDemo = () => {
	return (
		<div>
			<h2>DataDisplayWidget</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/DataDisplayWidget.js"/>
				<ComponentIntro name="Description" desc="Display highlight with icon"/>
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
							<tr>
								<td>icon</td>
								<td>Custom icon type for icon avatar</td>
								<td>ReactNode</td>
								<td></td>
							</tr>
							<tr>
								<td>color</td>
								<td>icon color</td>
								<td>red | orange | gold | green | blue | cyan | purple | magenta | volcano | lime | geekblue</td>
								<td></td>
							</tr>
							<tr>
								<td>avatarSize</td>
								<td>icon avatar size</td>
								<td>numbere</td>
								<td>50</td>
							</tr>
							<tr>
								<td>vertical</td>
								<td>Display as vertical mode</td>
								<td>boolean</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default DataDisplayWidgetDemo
