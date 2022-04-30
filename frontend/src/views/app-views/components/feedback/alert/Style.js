import React, { Component } from "react";
import { Alert } from "antd";

export class Style extends Component {
  render() {
    return (
      <div>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </div>
    );
  }
}

export default Style;
