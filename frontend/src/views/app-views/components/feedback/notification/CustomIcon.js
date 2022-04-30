import React, { Component } from "react";
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

export class CustomIcon extends Component {
  render() {
    return (
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    );
  }
}

export default CustomIcon;
