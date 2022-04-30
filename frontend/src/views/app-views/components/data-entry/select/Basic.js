import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export class Basic extends Component {
  render() {
    return (
      <div>
        <Select className="mr-2" defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select className="mr-2" defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select className="mr-2" defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
    );
  }
}

export default Basic;
