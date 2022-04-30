import React, { Component } from 'react'
import { Tag } from 'antd';

export class Status extends Component {
	render() {
		return (
			<div>
				<Tag color="success">success</Tag>
				<Tag color="processing">processing</Tag>
				<Tag color="error">error</Tag>
				<Tag color="default">default</Tag>
				<Tag color="warning">warning</Tag>
			</div>
		)
	}
}

export default Status
