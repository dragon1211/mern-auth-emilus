import React, { Component } from "react";
import { Card } from "antd";

export class Simple extends Component {
  render() {
    return (
      <Card style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}

export default Simple;
