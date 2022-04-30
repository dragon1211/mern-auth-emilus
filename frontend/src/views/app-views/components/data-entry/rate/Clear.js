import React, { Component } from "react";
import { Rate } from "antd";

export class Clear extends Component {
  render() {
    return (
      <div>
        <Rate defaultValue={3} />
        <span className="ant-rate-text">allowClear: true</span>
        <br />
        <Rate allowClear={false} defaultValue={3} />
        <span className="ant-rate-text">allowClear: false</span>
      </div>
    );
  }
}

export default Clear;
