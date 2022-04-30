import React, { Component } from "react";
import { Result, Button } from "antd";

export class Warning extends Component {
  render() {
    return (
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    );
  }
}

export default Warning;
