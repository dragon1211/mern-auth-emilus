import React, { Component } from "react";
import { Divider } from "antd";

export class Vertical extends Component {
  render() {
    return (
      <div>
        Text
        <Divider type="vertical" />
        <a href="/#">Link</a>
        <Divider type="vertical" />
        <a href="/#">Link</a>
      </div>
    );
  }
}

export default Vertical;
