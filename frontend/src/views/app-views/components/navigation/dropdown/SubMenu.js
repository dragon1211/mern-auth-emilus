import React from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

class DropdownSubMenu extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu}>
        <a href="/#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Cascading menu <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default DropdownSubMenu;
