import React, { Component } from "react";
import { InputNumber } from "antd";

function onChange(value) {
  console.log("changed", value);
}

export class Digit extends Component {
  render() {
    return <InputNumber min={0} max={10} step={0.1} onChange={onChange} />;
  }
}

export default Digit;
