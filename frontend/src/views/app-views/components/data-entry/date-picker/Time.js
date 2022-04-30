import React, { Component } from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

export class Time extends Component {
  render() {
    return (
      <div>
        <DatePicker
          showTime
          placeholder="Select Time"
          onChange={onChange}
          onOk={onOk}
        />
        <br />
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          placeholder={["Start Time", "End Time"]}
          onChange={onChange}
          onOk={onOk}
        />
      </div>
    );
  }
}

export default Time;
