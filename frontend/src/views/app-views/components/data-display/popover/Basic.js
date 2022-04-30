import React, { Component } from "react";
import { Popover, Button } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export class Basic extends Component {
  render() {
    return (
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    );
  }
}

export default Basic;
