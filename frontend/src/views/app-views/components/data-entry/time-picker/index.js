import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import TwelveHoursMd from './markdown/12hours.md';
import AddonMd from './markdown/addon.md';
import DisabledMd from './markdown/disabled.md';
import HideColumnMd from './markdown/hide-column.md';
import IntervalOptionsMd from './markdown/interval-options.md';
import RangePickerMd from './markdown/range-picker.md';
import SizeMd from './markdown/size.md';
import ValueMd from './markdown/value.md';
import Basic from './Basic';
import TwelveHours from './TwelveHours';
import Addon from './Addon';
import Disabled from './Disabled';
import HideColumn from './HideColumn';
import IntervalOptions from './IntervalOptions';
import RangePicker from './RangePicker';
import Size from './Size';
import Value from './Value';

export class TimepickerComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={SizeMd}><Size /></DemoCard>
						<DemoCard code={HideColumnMd}><HideColumn /></DemoCard>
						<DemoCard code={AddonMd}><Addon /></DemoCard>
						<DemoCard code={RangePickerMd}><RangePicker /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={ValueMd}><Value /></DemoCard>
						<DemoCard code={DisabledMd}><Disabled /></DemoCard>
						<DemoCard code={IntervalOptionsMd}><IntervalOptions /></DemoCard>
						<DemoCard code={TwelveHoursMd}><TwelveHours /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default TimepickerComponent;
