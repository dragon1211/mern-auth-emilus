import React from "react";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from "antd";

class WithIcon extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default WithIcon;
