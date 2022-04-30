import React, { Component } from "react";
import { Button } from "antd";

export class Basic extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}

export default Basic;

