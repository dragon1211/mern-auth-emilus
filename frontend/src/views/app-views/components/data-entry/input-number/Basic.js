import React, { Component } from "react";
import { InputNumber } from "antd";

function onChange(value) {
  console.log("changed", value);
}

export class Basic extends Component {
  render() {
    return (
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    );
  }
}

export default Basic;
