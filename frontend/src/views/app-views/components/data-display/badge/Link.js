import React, { Component } from "react";
import { Badge } from "antd";

export class Link extends Component {
  render() {
    return (
      <a href="/#">
        <Badge count={5}>
          <span className="head-example" />
        </Badge>
      </a>
    );
  }
}

export default Link;
