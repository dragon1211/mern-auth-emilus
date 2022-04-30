import React, { Component } from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export class Basic extends Component {
  render() {
    return (
      <div>
        <div className="mb-3">
          <Avatar className="mr-3" size={64} icon={<UserOutlined />} />
          <Avatar className="mr-3" size="large" icon={<UserOutlined />} />
          <Avatar className="mr-3" icon={<UserOutlined />} />
          <Avatar className="mr-3" size="small" icon={<UserOutlined />} />
        </div>
        <div>
          <Avatar className="mr-3" shape="square" size={64} icon={<UserOutlined />} />
          <Avatar className="mr-3" shape="square" size="large" icon={<UserOutlined />} />
          <Avatar className="mr-3" shape="square" icon={<UserOutlined />} />
          <Avatar className="mr-3" shape="square" size="small" icon={<UserOutlined />} />
        </div>
      </div>
    );
  }
}

export default Basic;
