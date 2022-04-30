import React, { Component } from "react";
import { Tooltip } from "antd";

export class Basic extends Component {
  render() {
    return (
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    );
  }
}

export default Basic;
