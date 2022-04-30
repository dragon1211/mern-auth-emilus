import React, { Component } from 'react'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export class Bordered extends Component {
	render() {
		return (
			<div>
				<DatePicker bordered={false} />
				<br />
				<DatePicker picker="week" bordered={false} />
				<br />
				<DatePicker picker="month" bordered={false} />
				<br />
				<DatePicker picker="year" bordered={false} />
				<br />
				<RangePicker bordered={false} />
				<br />
				<RangePicker picker="week" bordered={false} />
				<br />
				<RangePicker picker="month" bordered={false} />
				<br />
				<RangePicker picker="year" bordered={false} />
			</div>
		)
	}
}

export default Bordered
