import React, { Component } from "react";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export class Basic extends Component {
  render() {
    return <Checkbox onChange={onChange}>Checkbox</Checkbox>;
  }
}

export default Basic;
