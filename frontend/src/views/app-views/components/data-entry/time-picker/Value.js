import React, { Component } from "react";
import { TimePicker } from "antd";

export class Value extends Component {
  state = {
    value: null
  };

  onChange = time => {
    console.log(time);
    this.setState({ value: time });
  };

  render() {
    return <TimePicker value={this.state.value} onChange={this.onChange} />;
  }
}

export default Value;
