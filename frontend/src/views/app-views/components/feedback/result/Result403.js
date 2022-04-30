import React, { Component } from "react";
import { Result, Button } from "antd";

export class Result403 extends Component {
  render() {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }
}

export default Result403;
