import React, { Component } from 'react'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export class ExtraFooter extends Component {
	render() {
		return (
			<div>
				<DatePicker renderExtraFooter={() => 'extra footer'} />
				<br />
				<DatePicker renderExtraFooter={() => 'extra footer'} showTime />
				<br />
				<RangePicker renderExtraFooter={() => 'extra footer'} />
				<br />
				<RangePicker renderExtraFooter={() => 'extra footer'} showTime />
				<br />
				<DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
			</div>
		)
	}
}

export default ExtraFooter
