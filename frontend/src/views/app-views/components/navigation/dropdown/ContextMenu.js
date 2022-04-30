import React from "react";
import { Menu, Dropdown } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class ContextMenu extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["contextMenu"]}>
        <div
          style={{
            textAlign: "center",
            background: "#f7f7f7",
            height: 200,
            lineHeight: "200px",
            color: "#777"
          }}
        >
          Right Click on here
        </div>
      </Dropdown>
    );
  }
}

export default ContextMenu;
