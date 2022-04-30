import React, { Component } from "react";
import { TimePicker } from "antd";

function onChange(time, timeString) {
  console.log(time, timeString);
}

export class TwelveHours extends Component {
  render() {
    return (
      <div>
        <span className="mr-2">
          <TimePicker use12Hours onChange={onChange} />
        </span>
        <span className="mr-2">
          <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
        </span>
        <span className="mr-2">
          <TimePicker use12Hours format="h:mm a" onChange={onChange} />
        </span>
      </div>
    );
  }
}

export default TwelveHours;
