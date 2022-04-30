import React, { Component } from 'react'
import { Select, Tag } from 'antd';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
}

export class CustomTagRender extends Component {
	render() {
		return (
			<Select
				mode="multiple"
				tagRender={tagRender}
				defaultValue={['gold', 'cyan']}
				style={{ width: '100%' }}
				options={options}
			/>
		)
	}
}

export default CustomTagRender
