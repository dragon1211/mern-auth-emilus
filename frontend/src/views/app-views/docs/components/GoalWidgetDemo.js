import React from 'react'
import GoalWidget from 'components/shared-components/GoalWidget'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card, Button } from 'antd'

const Demo = () => {
	return (
		<GoalWidget 
			title="Monthly Target" 
			value={87}
			subtitle="You need abit more effort to hit monthly target"
			extra={<Button type="primary">Learn More</Button>}
		/>
	)
}

const  usageStr = `import React, { useState } from 'react'
import GoalWidget from 'components/shared-components/GoalWidget'

export default const Demo = () =>  {
	return (
		<GoalWidget 
			title="Monthly Target" 
			value={87}
			subtitle="You need abit more effort to hit monthly target"
			extra={<Button type="primary">Learn More</Button>}
		/>
	)
}
`

const GoalWidgetDemo = () => {
	return (
		<div>
			<h2>GoalWidget</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/GoalWidget.js"/>
				<ComponentIntro name="Description" desc="Prgression bar inside a widget"/>
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
								<td>Progression value</td>
								<td>number</td>
								<td></td>
							</tr>
							<tr>
								<td>title</td>
								<td>Display title</td>
								<td>string | ReactNode</td>
								<td></td>
							</tr>
							<tr>
								<td>size</td>
								<td>Progress bar size</td>
								<td>number</td>
								<td></td>
							</tr>
							<tr>
								<td>subtitle</td>
								<td>Subtitle</td>
								<td>string</td>
								<td></td>
							</tr>
							<tr>
								<td>extra</td>
								<td>extra content</td>
								<td>string | ReactNode</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default GoalWidgetDemo
