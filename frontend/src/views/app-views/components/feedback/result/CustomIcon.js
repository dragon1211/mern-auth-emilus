import React, { Component } from "react";
import { SmileOutlined } from '@ant-design/icons';
import { Result, Button } from "antd";

export class CustomIcon extends Component {
  render() {
    return (
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    );
  }
}

export default CustomIcon;
