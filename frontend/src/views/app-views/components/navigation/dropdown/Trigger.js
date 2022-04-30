import React from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class Trigger extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a href="/#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Click me <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default Trigger;
