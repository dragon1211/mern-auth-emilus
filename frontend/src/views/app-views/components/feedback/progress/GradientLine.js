import React, { Component } from "react";
import { Progress } from "antd";

export class GradientLine extends Component {
  render() {
    return (
      <div>
        <Progress
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068"
          }}
          className="mb-2"
          percent={99.9}
        />
        <Progress
          strokeColor={{
            from: "#108ee9",
            to: "#87d068"
          }}
          percent={99.9}
          className="mb-2"
          status="active"
        />
        <Progress
          type="circle"
          className="mr-2"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068"
          }}
          percent={90}
        />
        <Progress
          type="circle"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068"
          }}
          percent={100}
        />
      </div>
    );
  }
}

export default GradientLine;
