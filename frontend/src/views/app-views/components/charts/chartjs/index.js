import React, { Component } from 'react'
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.md';
import LineChartMd from './markdown/LineChart.md';
import AreaChartMd from './markdown/AreaChart.md';
import BarChartMd from './markdown/BarChart.md';
import RadarChartMd from './markdown/RadarChart.md';
import DoughnutChartMd from './markdown/DoughnutChart.md';
import PolarChartMd from './markdown/PolarChart.md';
import LineChart from './LineChart';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import DoughnutChart from './DoughnutChart';
import PolarChart from './PolarChart';

export class ChartJs extends Component {
	render() {
		return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={LineChartMd}><LineChart /></DemoCard>
						<DemoCard code={BarChartMd}><BarChart /></DemoCard>
						<DemoCard code={DoughnutChartMd}><DoughnutChart /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={AreaChartMd}><AreaChart /></DemoCard>
						<DemoCard code={RadarChartMd}><RadarChart /></DemoCard>
						<DemoCard code={PolarChartMd}><PolarChart /></DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd} />
			</React.Fragment>
		)
	}
}

export default ChartJs
