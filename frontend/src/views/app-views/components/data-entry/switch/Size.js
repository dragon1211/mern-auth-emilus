import React, { Component } from "react";
import { Switch } from "antd";

export class Size extends Component {
  render() {
    return (
      <div>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </div>
    );
  }
}

export default Size;
