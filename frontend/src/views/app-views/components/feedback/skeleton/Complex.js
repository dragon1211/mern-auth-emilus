import React, { Component } from "react";
import { Skeleton } from "antd";

export class Complex extends Component {
  render() {
    return <Skeleton avatar paragraph={{ rows: 4 }} />;
  }
}

export default Complex;
