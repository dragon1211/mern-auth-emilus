import React, { Component, useState } from 'react'
import { Form, Input } from 'antd';

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(changedFields, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: 'Username is required!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
);

const Demo = () => {
  const [fields, setFields] = useState([
    {
      name: ['username'],
      value: 'Ant Design',
    },
  ]);
  return (
    <div>
      <CustomizedForm
        fields={fields}
        onChange={newFields => {
          setFields(newFields);
        }}
      />
      <pre style={{ maxWidth: '400px', borderRadius: '6px', marginTop: '24px' , backgroundColor: '#f5f5f5'}}>{JSON.stringify(fields, null, 2)}</pre>
    </div>
  );
};

export class GlobalState extends Component {
  render() {
    return (
      <Demo />
    )
  }
}

export default GlobalState
