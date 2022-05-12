import React, { Component } from 'react'
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.md';
import BasicLineMd from './markdown/BasicLine.md';
import DashedLineMd from './markdown/DashedLine.md';
import BasicAreaMd from './markdown/BasicArea.md';
import SplineAreaMd from './markdown/SplineArea.md';
import BasicColumnMd from './markdown/BasicColumn.md';
import StackedColumnMd from './markdown/StackedColumn.md';
import BasicBarMd from './markdown/BasicBar.md';
import GroupedBarMd from './markdown/GroupedBar.md';
import PieMd from './markdown/Pie.md';
import DonutMd from './markdown/Donut.md';
import BasicLine from './BasicLine';
import DashedLine from './DashedLine';
import BasicArea from './BasicArea';
import SplineArea from './SplineArea';
import BasicColumn from './BasicColumn';
import StackedColumn from './StackedColumn';
import BasicBar from './BasicBar';
import GroupedBar from './GroupedBar';
import Pie from './Pie';
import Donut from './Donut';

export class Apex extends Component {
	render() {
		return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicLineMd}><BasicLine /></DemoCard>
						<DemoCard code={BasicAreaMd}><BasicArea /></DemoCard>
						<DemoCard code={BasicColumnMd}><BasicColumn /></DemoCard>
						<DemoCard code={BasicBarMd}><BasicBar /></DemoCard>
						<DemoCard code={PieMd}><Pie /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={DashedLineMd}><DashedLine /></DemoCard>
						<DemoCard code={SplineAreaMd}><SplineArea /></DemoCard>
						<DemoCard code={StackedColumnMd}><StackedColumn /></DemoCard>
						<DemoCard code={GroupedBarMd}><GroupedBar /></DemoCard>
						<DemoCard code={DonutMd}><Donut /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		)
	}
}

export default Apex
