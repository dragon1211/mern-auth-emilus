import React, { Component } from "react";
import { Badge } from "antd";

export class Overflow extends Component {
  render() {
    return (
      <div>
        <Badge count={99}>
          <a href="/#" className="head-example" ><span></span></a>
        </Badge>
        <Badge count={100}>
          <a href="/#" className="head-example" ><span></span></a>
        </Badge>
        <Badge count={99} overflowCount={10}>
          <a href="/#" className="head-example" ><span></span></a>
        </Badge>
        <Badge count={1000} overflowCount={999}>
          <a href="/#" className="head-example" ><span></span></a>
        </Badge>
      </div>
    );
  }
}

export default Overflow;
