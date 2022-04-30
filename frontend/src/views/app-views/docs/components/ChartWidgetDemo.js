import React from 'react'
import ChartWidget from 'components/shared-components/ChartWidget'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from 'antd'


const LineDemoStr = `import React from 'react'
import ChartWidget from 'components/shared-components/ChartWidget'

export default const LineDemo = () => {

	const visitorChartData = {
  	series: [
			{
				name: "Session Duration",
				data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
			},
			{
				name: "Page Views",
				data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
			}
		],
		categories:[
			'01 Jan', 
			'02 Jan', 
			'03 Jan', 
			'04 Jan', 
			'05 Jan', 
			'06 Jan', 
			'07 Jan', 
			'08 Jan', 
			'09 Jan',
			'10 Jan', 
			'11 Jan', 
			'12 Jan'
		]
	}
	return (
		<ChartWidget 
			title="Unique Visitors" 
			series={visitorChartData.series} 
			xAxis={visitorChartData.categories} 
			height={400}
		/>
	)
}
`

const BarDemoStr = `import React from 'react'
import ChartWidget from 'components/shared-components/ChartWidget'

export default const BarDemo = () => {

	const uniqueVisitorsData = {
		series: [
			{
				name: "Session Duration",
				data: [45, 52, 38, 24, 33, 26, 21]
			},
			{
				name: "Page Views",
				data: [35, 41, 62, 42, 13, 18, 29]
			}
		],
		categories:[
			'01 Jan', 
			'02 Jan', 
			'03 Jan', 
			'04 Jan', 
			'05 Jan', 
			'06 Jan', 
			'07 Jan'
		]
	}

	return (
		<ChartWidget 
			series={uniqueVisitorsData.series} 
			xAxis={uniqueVisitorsData.categories} 
			title="Unique Visitors"
			height={410}
			type="bar"
			customOptions={
				{
					colors: ['#ff6b72', '#04d182']
				}
			}
			extra={
				<Button type="default" size="small">Extra Content</Button>
			}
		/>
	)
}
`

const LineDemo = () => {

	const visitorChartData = {
  	series: [
			{
				name: "Session Duration",
				data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
			},
			{
				name: "Page Views",
				data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
			}
		],
		categories:[
			'01 Jan', 
			'02 Jan', 
			'03 Jan', 
			'04 Jan', 
			'05 Jan', 
			'06 Jan', 
			'07 Jan', 
			'08 Jan', 
			'09 Jan',
			'10 Jan', 
			'11 Jan', 
			'12 Jan'
		]
	}
	return (
		<ChartWidget 
			title="Unique Visitors" 
			series={visitorChartData.series} 
			xAxis={visitorChartData.categories} 
			height={400}
		/>
	)
}

const BarDemo = () => {

	const uniqueVisitorsData = {
		series: [
			{
				name: "Session Duration",
				data: [45, 52, 38, 24, 33, 26, 21]
			},
			{
				name: "Page Views",
				data: [35, 41, 62, 42, 13, 18, 29]
			}
		],
		categories:[
			'01 Jan', 
			'02 Jan', 
			'03 Jan', 
			'04 Jan', 
			'05 Jan', 
			'06 Jan', 
			'07 Jan'
		]
	}

	return (
		<ChartWidget 
			series={uniqueVisitorsData.series} 
			xAxis={uniqueVisitorsData.categories} 
			title="Unique Visitors"
			height={410}
			type="bar"
			customOptions={
				{
					colors: ['#ff6b72', '#04d182']
				}
			}
			extra={
				<Button type="default" size="small">Extra Content</Button>
			}
		/>
	)
}

const ChartWidgetDemo = () => {
	return (
		<div>
			<h2>ChartWidget</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/ChartWidget.js"/>
				<ComponentIntro name="Description" desc="Create a chart wrapped by card "/>
			</div>
			<div className="mt-4">
				<h4>Line</h4>
				<LineDemo />
				<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
					{LineDemoStr}
				</SyntaxHighlighter>
			</div>
			<div className="mt-5">
				<h4>Bar</h4>
				<BarDemo />
				<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
					{BarDemoStr}
				</SyntaxHighlighter>
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
								<td>Widget title</td>
								<td>string | ReactNode</td>
								<td></td>
							</tr>
							<tr>
								<td>series</td>
								<td>Chart series</td>
								<td>array{'<'}{'{'}name: string, data: number[]{'>'}{'}'}</td>
								<td>[]</td>
							</tr>
							<tr>
								<td>xAxis</td>
								<td>Chart xAxis</td>
								<td>string[]</td>
								<td></td>
							</tr>
							<tr>
								<td>customOptions</td>
								<td>Custom options for chart</td>
								<td><a href="https://apexcharts.com/docs/options/annotations/">Apexcharts option</a></td>
								<td></td>
							</tr>
							<tr>
								<td>width</td>
								<td>Chart width</td>
								<td>number | string</td>
								<td>'100%'</td>
							</tr>
							<tr>
								<td>height</td>
								<td>Chart height</td>
								<td>number | string</td>
								<td>300</td>
							</tr>
							<tr>
								<td>card</td>
								<td>Display in card</td>
								<td>boolean</td>
								<td>true</td>
							</tr>
							<tr>
								<td>type</td>
								<td>Chart type</td>
								<td>line | bar | area</td>
								<td>'line'</td>
							</tr>
						</tbody>
					</table>
				</div>
		</div>
	)
}

export default ChartWidgetDemo
