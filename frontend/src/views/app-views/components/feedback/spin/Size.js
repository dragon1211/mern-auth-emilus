import React, { Component } from "react";
import { Spin } from "antd";

export class Size extends Component {
  render() {
    return (
      <div>
        <Spin className="mr-4" size="small" />
        <Spin className="mr-4" />
        <Spin size="large" />
      </div>
    );
  }
}

export default Size;
