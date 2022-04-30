import React, { Component } from "react";
import { Result, Button } from "antd";

export class Info extends Component {
  render() {
    return (
      <Result
        title="Your operation has been executed"
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    );
  }
}

export default Info;
