import React, { Component } from "react";
import { TimePicker } from "antd";

export class IntervalOptions extends Component {
  render() {
    return <TimePicker minuteStep={15} secondStep={10} />;
  }
}

export default IntervalOptions;
