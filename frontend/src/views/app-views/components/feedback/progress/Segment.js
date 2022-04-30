import React, { Component } from "react";
import { Tooltip, Progress } from "antd";

export class Segment extends Component {
  render() {
    return (
      <div>
        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{ percent: 30 }} />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{ percent: 30 }} type="circle" />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
        </Tooltip>
      </div>
    );
  }
}

export default Segment;
