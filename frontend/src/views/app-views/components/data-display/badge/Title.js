/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Badge } from "antd";

export class Title extends Component {
  render() {
    return (
      <div>
        <Badge count={5} title="Custom hover text">
          <a href="/#" className="head-example" />
        </Badge>
      </div>
    );
  }
}

export default Title;
