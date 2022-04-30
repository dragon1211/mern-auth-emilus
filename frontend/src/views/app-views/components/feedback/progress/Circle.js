import React, { Component } from "react";
import { Progress } from "antd";

export class Circle extends Component {
  render() {
    return (
      <div>
        <Progress className="mr-2" type="circle" percent={75} />
        <Progress className="mr-2" type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </div>
    );
  }
}

export default Circle;
