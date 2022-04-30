/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class Event extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu}>
        <a href="" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default Event;
