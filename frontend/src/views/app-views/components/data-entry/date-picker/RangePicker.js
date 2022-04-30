import React, { Component } from "react";
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export class DateRangePicker extends Component {
  render() {
    return (
      <div>
        <RangePicker />
        <br />
        <RangePicker showTime />
        <br />
        <RangePicker picker="week" />
        <br />
        <RangePicker picker="month" />
        <br />
        <RangePicker picker="year" />
      </div>
    );
  }
}

export default DateRangePicker;
