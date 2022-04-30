import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import BorderedMd from './markdown/bordered.md';
import DateRenderMd from './markdown/date-render.md';
import DisabledDateMd from './markdown/disabled-date.md';
import DisabledMd from './markdown/disabled.md';
import ExtraFooterMd from './markdown/extra-footer.md';
import FormatMd from './markdown/format.md';
import RangePickerMd from './markdown/range-picker.md';
import PresettedRangesMd from './markdown/presetted-ranges.md';
import SizeMd from './markdown/size.md';
import TimeMd from './markdown/time.md';
import Basic from './Basic';
import Bordered from './Bordered';
import DateRender from './DateRender';
import DisabledDate from './DisabledDate';
import Disabled from './Disabled';
import ExtraFooter from './ExtraFooter';
import Format from './Format';
import RangePicker from './RangePicker';
import PresettedRanges from './PresettedRanges';
import Size from './Size';
import Time from './Time';

export class DatePickerComponent extends Component {
  render() {
    return (
      <div className="code-box-datepicker-demo">
				<Row gutter={16} type="flex" >
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={FormatMd}><Format /></DemoCard>
						<DemoCard code={DisabledMd}><Disabled /></DemoCard>
						<DemoCard code={PresettedRangesMd}><PresettedRanges /></DemoCard>
						<DemoCard code={SizeMd}><Size /></DemoCard>
						<DemoCard code={BorderedMd}><Bordered /></DemoCard>						
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={RangePickerMd}><RangePicker /></DemoCard>					
						<DemoCard code={TimeMd}><Time /></DemoCard>
						<DemoCard code={DisabledDateMd}><DisabledDate /></DemoCard>
						<DemoCard code={ExtraFooterMd}><ExtraFooter /></DemoCard>
						<DemoCard code={DateRenderMd}><DateRender /></DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd}/>
			</div>
    );
  }
}

export default DatePickerComponent;
