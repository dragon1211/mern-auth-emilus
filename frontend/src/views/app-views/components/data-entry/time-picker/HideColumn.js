import React, { Component } from "react";
import { TimePicker } from "antd";
import moment from "moment";

const format = "HH:mm";

export class HideColumn extends Component {
  render() {
    return (
      <TimePicker defaultValue={moment("12:08", format)} format={format} />
    );
  }
}

export default HideColumn;
