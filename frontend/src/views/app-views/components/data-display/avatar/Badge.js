import React, { Component } from "react";
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export class AvatarBadge extends Component {
  render() {
    return (
      <div>
        <span className="mr-3">
          <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </span>
        <span>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </span>
      </div>
    );
  }
}

export default AvatarBadge;
