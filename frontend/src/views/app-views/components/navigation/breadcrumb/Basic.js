/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Breadcrumb } from "antd";

class Basic extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Basic;
