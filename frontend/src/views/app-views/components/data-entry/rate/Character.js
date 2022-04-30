import React, { Component } from "react";
import { HeartOutlined } from '@ant-design/icons';
import { Rate } from "antd";

export class Character extends Component {
  render() {
    return (
      <div>
        <Rate character={<HeartOutlined />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </div>
    );
  }
}

export default Character;
