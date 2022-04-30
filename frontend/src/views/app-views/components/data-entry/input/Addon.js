import React, { Component } from "react";
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" style={{ width: 90 }}>
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

export class Addon extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
        </div>
      </div>
    );
  }
}

export default Addon;
