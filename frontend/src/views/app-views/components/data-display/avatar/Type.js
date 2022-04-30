import React, { Component } from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export class Type extends Component {
  render() {
    return (
      <div>
        <Avatar className="mr-3" icon={<UserOutlined />} />
        <Avatar className="mr-3">U</Avatar>
        <Avatar className="mr-3">USER</Avatar>
        <Avatar className="mr-3" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar
          className="mr-3"
          style={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          U
        </Avatar>
        <Avatar
          className="mr-3"  
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </div>
    );
  }
}

export default Type;
