import React, { Component } from "react";
import { Mentions } from "antd";

const { Option } = Mentions;

function onChange(value) {
  console.log("Change:", value);
}

function onSelect(option) {
  console.log("select", option);
}

export class Basic extends Component {
  render() {
    return (
      <Mentions
        style={{ width: "100%" }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
      >
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    );
  }
}

export default Basic;
