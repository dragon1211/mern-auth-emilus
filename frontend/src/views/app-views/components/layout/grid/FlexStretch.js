import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';

export class FlexStretch extends Component {
	render() {
		return (
			<>
				<Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
					Percentage columns
				</Divider>
				<Row style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
					<Col flex={2}>2 / 5</Col>
					<Col flex={3}>3 / 5</Col>
				</Row>
				<Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
					Fill rest 
				</Divider>
				<Row style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
					<Col flex="100px">100px</Col>
					<Col flex="auto">Fill Rest</Col>
				</Row>
				<Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
					Raw flex style
				</Divider>
				<Row style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
					<Col flex="1 1 200px">1 1 200px</Col>
					<Col flex="0 1 300px">0 1 300px</Col>
				</Row>
			</>
		)
	}
}

export default FlexStretch
