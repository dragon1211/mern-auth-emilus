import React, { Component } from "react";
import { Progress } from "antd";

export class Linecap extends Component {
  render() {
    return (
      <div>
        <Progress className="mb-2" strokeLinecap="square" percent={75} />
        <Progress className="mr-2" strokeLinecap="square" type="circle" percent={75} />
        <Progress className="mr-2" strokeLinecap="square" type="dashboard" percent={75} />
      </div>
    );
  }
}

export default Linecap;
