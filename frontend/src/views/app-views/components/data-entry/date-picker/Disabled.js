import React, { Component } from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";

export class Disabled extends Component {
  render() {
    return (
      <div>
        <DatePicker defaultValue={moment("2015-06-06", dateFormat)} disabled />
        <br />
        <MonthPicker defaultValue={moment("2015-06", "YYYY-MM")} disabled />
        <br />
        <RangePicker
          defaultValue={[
            moment("2015-06-06", dateFormat),
            moment("2015-06-06", dateFormat)
          ]}
          disabled
        />
      </div>
    );
  }
}

export default Disabled;
