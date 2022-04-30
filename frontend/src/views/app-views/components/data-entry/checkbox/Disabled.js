import React, { Component } from "react";
import { Checkbox } from "antd";

export class Disabled extends Component {
  render() {
    return (
      <div>
        <Checkbox defaultChecked={false} disabled />
        <br />
        <Checkbox defaultChecked disabled />
      </div>
    );
  }
}

export default Disabled;
