import React, { Component } from 'react'
import { Progress } from 'antd';

export class Steps extends Component {
	render() {
		return (
			<div>
				<Progress percent={50} steps={3} strokeColor="#1890ff" />
				<br />
				<Progress percent={30} steps={5} strokeColor="#1890ff" />
				<br />
				<Progress percent={100} steps={5} size="small" strokeColor="#1890ff" />
			</div>
		)
	}
}

export default Steps
