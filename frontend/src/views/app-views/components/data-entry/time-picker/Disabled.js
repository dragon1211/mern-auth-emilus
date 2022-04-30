import React, { Component } from "react";
import { TimePicker } from "antd";
import moment from "moment";

export class Disabled extends Component {
  render() {
    return (
      <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} disabled />
    );
  }
}

export default Disabled;
