import React, { Component } from "react";
import { Mentions } from "antd";

const { Option } = Mentions;

export class Placement extends Component {
  render() {
    return (
      <Mentions style={{ width: "100%" }} placement="top">
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    );
  }
}

export default Placement;
