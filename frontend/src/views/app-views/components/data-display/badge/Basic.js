import React, { Component } from "react";
import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge } from "antd";

export class Basic extends Component {
  render() {
    return (
      <div>
        <Badge count={5}>
          <a href="/#" className="head-example"><span></span></a>
        </Badge>
        <Badge count={0} showZero>
          <a href="/#" className="head-example"><span></span></a>
        </Badge>
        <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
          <a href="/#" className="head-example"><span></span></a>
        </Badge>
      </div>
    );
  }
}

export default Basic;
