import React, { Component } from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export class CustomIndicator extends Component {
  render() {
    return <Spin indicator={antIcon} />;
  }
}

export default CustomIndicator;
