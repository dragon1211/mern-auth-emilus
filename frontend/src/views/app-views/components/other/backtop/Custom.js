import React, { Component } from "react";
import { BackTop } from "antd";

export class Custom extends Component {
  render() {
    return (
      <div>
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
        Scroll down to see the bottom-right
        <strong style={{ color: "#1088e9" }}> blue </strong>
        button.
      </div>
    );
  }
}

export default Custom;
