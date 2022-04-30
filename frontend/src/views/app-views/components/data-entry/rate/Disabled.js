import React, { Component } from "react";
import { Rate } from "antd";

export class Disabled extends Component {
  render() {
    return <Rate disabled defaultValue={2} />;
  }
}

export default Disabled;
