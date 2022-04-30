import React from "react";
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

class Multiple extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary">primary</Button>
        <Button>secondary</Button>
        <Dropdown overlay={menu}>
          <Button>
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default Multiple;
