import React, { Component } from "react";
import { Rate } from "antd";

export class Half extends Component {
  render() {
    return <Rate allowHalf defaultValue={2.5} />;
  }
}

export default Half;
