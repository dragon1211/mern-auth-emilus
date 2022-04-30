import React from 'react'
import RegiondataWidget from 'components/shared-components/RegiondataWidget'
import Flex from 'components/shared-components/Flex'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'antd'

const Demo = () => {
	const regionData = [
		{
			color: '#3e82f7',
			name: 'United States of America',
			value: '37.61%'
			},
			{
			color: '#04d182',
			name: 'Brazil',
			value: '16.79%'
			},
			{
			color: '#ffc542',
			name: 'India',
			value: '12.42%'
		 },
			{
			color: '#fa8c16',
			name: 'China',
			value: '9.85%'
		},
		{
			color: '#ff6b72',
			name: 'Malaysia',
			value: '7.68%'
		},
		{
			color: '#a461d8',
			name: 'Thailand',
			value: '5.11%'
		}
	]
	return (
		<RegiondataWidget 
			title="Entrance by region"
			data={regionData}
			content={
				<div className="mb-4">
					<Flex alignItems="center">
						<h2 className="mb-0 font-weight-bold">37.61%</h2>
					</Flex>
					<span className="text-muted">Top entrance region</span>
				</div>
			}
		/>
	)
}

const  usageStr = `import React, { useState } from 'react'
import RegiondataWidget from 'components/shared-components/RegiondataWidget'
import Flex from 'components/shared-components/Flex'

export default const Demo = () =>  {
	const regionData = [
		{
			color: '#3e82f7',
			name: 'United States of America',
			value: '37.61%'
		},
		{
			color: '#04d182',
			name: 'Brazil',
			value: '16.79%'
		},
		{
			color: '#ffc542',
			name: 'India',
			value: '12.42%'
		 },
			{
			color: '#fa8c16',
			name: 'China',
			value: '9.85%'
		},
		{
			color: '#ff6b72',
			name: 'Malaysia',
			value: '7.68%'
		},
		{
			color: '#a461d8',
			name: 'Thailand',
			value: '5.11%'
		}
	]
	return (
		<RegiondataWidget 
			title="Entrance by region"
			data={regionData}
			content={
				<div className="mb-4">
					<Flex alignItems="center">
						<h2 className="mb-0 font-weight-bold">37.61%</h2>
					</Flex>
					<span className="text-muted">Top entrance region</span>
				</div>
			}
		/>
	)
}
`

const RegiondataWidgetDemo = () => {
	return (
		<div>
			<h2>RegiondataWidget</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/RegiondataWidget.js"/>
				<ComponentIntro name="Description" desc="Widget for display regions & data"/>
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
								<td>title</td>
								<td>Title of widget</td>
								<td>string</td>
								<td></td>
							</tr>
							<tr>
								<td>data</td>
								<td>Map data</td>
								<td>array{'<'}{'{'}name: string, data: string, color: string{'>'}{'}'}</td>
								<td>[]</td>
							</tr>
							<tr>
								<td>mapSource</td>
								<td>geography SVG, More geography SVG can be found in this <a href="https://github.com/deldersveld/topojson/tree/master/countries" target="_blank" rel="noopener noreferrer">repository</a></td>
								<td>string</td>
								<td></td>
							</tr>
							<tr>
								<td>mapType</td>
								<td>Map type</td>
								<td>world | other</td>
								<td>world</td>
							</tr>
							<tr>
								<td>content</td>
								<td>Content display in middle of left panel</td>
								<td>string | ReactNode</td>
								<td>assets/maps/world-countries-sans-antarctica.json</td>
							</tr>
							<tr>
								<td>list</td>
								<td>Custom content for bottom of left panel</td>
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

export default RegiondataWidgetDemo
