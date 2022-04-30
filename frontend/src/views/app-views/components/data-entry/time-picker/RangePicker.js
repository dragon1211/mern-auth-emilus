import React, { Component } from 'react'
import { TimePicker } from 'antd';

const { RangePicker } = TimePicker;

export class RangeTimePicker extends Component {
	render() {
		return (
			<div>
				<RangePicker />
			</div>
		)
	}
}

export default RangeTimePicker
