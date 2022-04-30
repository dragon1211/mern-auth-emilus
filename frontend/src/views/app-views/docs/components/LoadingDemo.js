import React from 'react'
import Loading from 'components/shared-components/Loading'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'antd'

const Demo = () => {
	return (
		<Loading />
	)
}

const  usageStr = `import React, { useState } from 'react'
import Loading from 'components/shared-components/Loading'

export default const Demo = () =>  {
	return (
		<Loading />
	)
}
`

const LoadingDemo = () => {
	return (
		<div>
			<h2>Loading</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/Loading.js"/>
				<ComponentIntro name="Description" desc="Loading component"/>
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
								<td>align</td>
								<td>position indicator</td>
								<td>center | left | right</td>
								<td>center</td>
							</tr>
							<tr>
								<td>cover</td>
								<td>Loading display coverage</td>
								<td>inline | content | page</td>
								<td>inline</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default LoadingDemo
