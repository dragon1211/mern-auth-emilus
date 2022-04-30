import React, { Component } from "react";
import { Slider } from "antd";

function formatter(value) {
  return `${value}%`;
}

export class TipFormatter extends Component {
  render() {
    return (
      <div>
        <Slider tipFormatter={formatter} />
        <Slider tipFormatter={null} />
      </div>
    );
  }
}

export default TipFormatter;
