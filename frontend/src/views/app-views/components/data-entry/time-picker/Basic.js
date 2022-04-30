import React, { Component } from "react";
import { TimePicker } from "antd";
import moment from "moment";

function onChange(time, timeString) {
  console.log(time, timeString);
}

export class Basic extends Component {
  render() {
    return (
      <TimePicker
        onChange={onChange}
        defaultValue={moment("00:00:00", "HH:mm:ss")}
      />
    );
  }
}

export default Basic;
