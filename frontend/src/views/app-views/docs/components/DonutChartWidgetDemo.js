import React from 'react'
import DonutChartWidget from 'components/shared-components/DonutChartWidget'
import Flex from 'components/shared-components/Flex'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card, Row, Col, Badge } from 'antd'

const Demo = () => {
	const sessionColor = ['#ffc107', '#3e82f7', '#04d182']
	const sessionData = [3561, 1443, 2462]
	const sessionLabels = ["Dasktops", "Tablets", "Mobiles"]
	const jointSessionData = () => {
		let arr = []
		for (let i = 0; i < sessionData.length; i++) {
			const data = sessionData[i];
			const label = sessionLabels[i];
			const color = sessionColor[i]
			arr = [...arr, {
				data: data,
				label: label,
				color: color
			}]
		}
		return arr
	}
	return (
		<DonutChartWidget 
			series={sessionData} 
			labels={sessionLabels} 
			title="Sessions Device"
			customOptions={{colors: sessionColor}}
			extra={
				<Row  justify="center">
					<Col xs={20} sm={20} md={20} lg={24}>
						<div className="mt-4 mx-auto" style={{maxWidth: 200}}>
							{jointSessionData().map(elm => (
								<Flex alignItems="center" justifyContent="between" className="mb-3" key={elm.label}>
									<div>
										<Badge color={elm.color} />
										<span className="text-gray-light">{elm.label}</span>
									</div>
									<span className="font-weight-bold text-dark">{elm.data}</span>
								</Flex>
							))}
						</div>
					</Col>
				</Row>
			}
		/>
	)
}

const  usageStr = `import React from 'react'
import DonutChartWidget from 'components/shared-components/DonutChartWidget'
import Flex from 'components/shared-components/Flex'
import { Card, Row, Col, Badge } from 'antd'

export default const Demo = () =>  {
	const sessionColor = ['#ffc107', '#3e82f7', '#04d182']
	const sessionData = [3561, 1443, 2462]
	const sessionLabels = ["Dasktops", "Tablets", "Mobiles"]
	const jointSessionData = () => {
		let arr = []
		for (let i = 0; i < sessionData.length; i++) {
			const data = sessionData[i];
			const label = sessionLabels[i];
			const color = sessionColor[i]
			arr = [...arr, {
				data: data,
				label: label,
				color: color
			}]
		}
		return arr
	}
	return (
		<DonutChartWidget 
			series={sessionData} 
			labels={sessionLabels} 
			title="Sessions Device"
			customOptions={{colors: sessionColor}}
			extra={
				<Row  justify="center">
					<Col xs={20} sm={20} md={20} lg={24}>
						<div className="mt-4 mx-auto" style={{maxWidth: 200}}>
							{jointSessionData().map(elm => (
								<Flex alignItems="center" justifyContent="between" className="mb-3" key={elm.label}>
									<div>
										<Badge color={elm.color} />
										<span className="text-gray-light">{elm.label}</span>
									</div>
									<span className="font-weight-bold text-dark">{elm.data}</span>
								</Flex>
							))}
						</div>
					</Col>
				</Row>
			}
		/>
	)
}`

const DonutChartWidgetDemo = () => {
	return (
		<div>
			<h2>DonutChartWidget</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/DonutChartWidget.js"/>
				<ComponentIntro name="Description" desc="Display dounut chart in a widget"/>
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
								<td>series</td>
								<td>Chart series</td>
								<td>array{'<'}{'{'}name: string, data: number[]{'>'}{'}'}</td>
								<td></td>
							</tr>
							<tr>
								<td>labels</td>
								<td>Chart label</td>
								<td>string[]</td>
								<td></td>
							</tr>
							<tr>
								<td>title</td>
								<td>Title inside chart</td>
								<td>string</td>
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
								<td>250</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default DonutChartWidgetDemo
