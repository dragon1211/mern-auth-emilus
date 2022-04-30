import React, { Component } from 'react'
import { Select } from 'antd';

const { Option } = Select;

export class Bordered extends Component {
	render() {
		return (
			<>
				<Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
				<Select defaultValue="lucy" style={{ width: 120 }} disabled bordered={false}>
					<Option value="lucy">Lucy</Option>
				</Select>
			</>
		)
	}
}

export default Bordered
