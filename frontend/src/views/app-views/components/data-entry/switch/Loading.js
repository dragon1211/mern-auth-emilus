import React, { Component } from "react";
import { Switch } from "antd";

export class Loading extends Component {
  render() {
    return (
      <div>
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading />
      </div>
    );
  }
}

export default Loading;
