import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

export class LabelInValue extends Component {
  render() {
    return (
      <Select
        labelInValue
        defaultValue={{ key: "lucy" }}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack (100)</Option>
        <Option value="lucy">Lucy (101)</Option>
      </Select>
    );
  }
}

export default LabelInValue;
