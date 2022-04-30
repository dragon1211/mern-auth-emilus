import React, { Component } from "react";
import { Tooltip, Button } from "antd";

export class ArrowPointAtCenter extends Component {
  render() {
    return (
      <div>
        <Tooltip placement="topLeft" title="Prompt Text">
          <Button>Align edge / 边缘对齐</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Tooltip>
      </div>
    );
  }
}

export default ArrowPointAtCenter;
