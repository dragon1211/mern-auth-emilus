import React, { Component } from 'react'
import { Select, Typography, Divider } from 'antd';

const { Title } = Typography;

const options = [];
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export class BigData extends Component {
	render() {
		return (
			<div>
				<Title level={3}>Ant Design 4.0</Title>
				<Title level={4}>{options.length} Items</Title>
				<Select
					mode="multiple"
					style={{ width: '100%' }}
					placeholder="Please select"
					defaultValue={['a10', 'c12']}
					onChange={handleChange}
					options={options}
				/>

				<Divider />

				<Title level={3}>Ant Design 3.0</Title>
				<a href="https://codesandbox.io/embed/beautiful-banzai-m72lv?view=preview">https://codesandbox.io/embed/beautiful-banzai-m72lv?view=preview</a>
			</div>
		)
	}
}

export default BigData
