import React, { Component } from 'react'
import { Button } from 'antd';

export class Danger extends Component {
	render() {
		return (
			<>
				<Button type="primary" danger>
					Primary
				</Button>
				<Button danger>Default</Button>
				<Button type="dashed" danger>
					link
				</Button>
				<Button type="link" danger>
					link
				</Button>
			</>
		)
	}
}

export default Danger
