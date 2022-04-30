import React from "react";
import { Menu, Dropdown, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

class Placement extends React.Component {
  render() {
    return (
      <div>
        <div className="mr-2 mb-2 d-inline-block">
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>
        </div>
        <div className="mr-2 mb-2 d-inline-block">
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>bottomCenter</Button>
          </Dropdown>
        </div>
        <div className="mr-2 mb-2 d-inline-block">
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>
        </div>
        <br />
        <div className="mr-2 mb-2 d-inline-block">
          <Dropdown overlay={menu} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>
        </div>
        <div className="mr-2 mb-2 d-inline-block">
          <Dropdown overlay={menu} placement="topCenter">
            <Button>topCenter</Button>
          </Dropdown>
        </div>
        <div className="mr-2 mb-2 d-inline-block">
          <Dropdown overlay={menu} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Placement;
