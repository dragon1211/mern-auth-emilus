import React from 'react'
import StatisticWidget from 'components/shared-components/StatisticWidget'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'antd'

const Demo = () => {
	return (
		<div style={{maxWidth: 300}}>
			<StatisticWidget 
				title="Sales" 
				value="$6,982"
				status={8.8}
				subtitle="Compare to last year (2019)"
			/>
		</div>
	)
}

const  usageStr = `import React, { useState } from 'react'
import StatisticWidget from 'components/shared-components/StatisticWidget'

export default const Demo = () => {
	return (
		<div style={{maxWidth: 300}}>
			<StatisticWidget 
				title="Sales" 
				value="$6,982"
				status={8.8}
				subtitle="Compare to last year (2019)"
			/>
		</div>
	)
}
`

const StatisticWidgetDemo = () => {
	return (
		<div>
			<h2>StatisticWidget</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/StatisticWidget.js"/>
				<ComponentIntro name="Description" desc="Widget for display highlight data"/>
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
									<td>string | ReactNode</td>
									<td></td>
								</tr>
								<tr>
									<td>subtitle</td>
									<td>Dispaly subtitle</td>
									<td>string</td>
									<td></td>
								</tr>
								<tr>
									<td>prefix</td>
									<td>Prefix content</td>
									<td>ReactNode</td>
									<td></td>
								</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default StatisticWidgetDemo
