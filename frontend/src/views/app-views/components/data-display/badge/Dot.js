/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { NotificationOutlined } from '@ant-design/icons';
import { Badge } from "antd";

export class Dot extends Component {
  render() {
    return (
      <div>
        <Badge dot>
          <NotificationOutlined />
        </Badge>
        <Badge count={0} dot>
          <NotificationOutlined />
        </Badge>
        <Badge dot>
          <a href="/#">Link something</a>
        </Badge>
      </div>
    );
  }
}

export default Dot;
