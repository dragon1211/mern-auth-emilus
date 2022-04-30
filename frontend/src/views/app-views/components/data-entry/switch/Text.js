import React, { Component } from "react";
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export class Text extends Component {
  render() {
    return (
      <div>
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <br />
        <br />
        <Switch checkedChildren="1" unCheckedChildren="0" />
        <br />
        <br />
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </div>
    );
  }
}

export default Text;
