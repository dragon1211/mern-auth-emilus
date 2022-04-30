import React, { Component } from "react";
import { Result, Button } from "antd";

export class Result500 extends Component {
  render() {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, the server is wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }
}

export default Result500;
