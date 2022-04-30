import React, { Component } from "react";
import { Slider } from "antd";

export class ShowTooltip extends Component {
  render() {
    return <Slider defaultValue={30} tooltipVisible />;
  }
}

export default ShowTooltip;
