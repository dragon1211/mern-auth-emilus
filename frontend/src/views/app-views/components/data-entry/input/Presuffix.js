import React, { Component } from "react";
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

export class Presuffix extends Component {
  render() {
    return (
      <div>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <br />
        <br />
        <Input prefix="￥" suffix="RMB" />

        <br />
        <br />

        <Input prefix="￥" suffix="RMB" disabled />
      </div>
    );
  }
}

export default Presuffix;
