import React, { Component } from "react";
import { Button, notification, Divider } from 'antd';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

const openNotification = placement => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};

export class Placement extends Component {
  render() {
    return (
      <div>
        <Button className="mr-2" type="primary" onClick={() => openNotification('topLeft')}>
          <RadiusUpleftOutlined />
          topLeft
        </Button>
        <Button className="mr-2" type="primary" onClick={() => openNotification('topRight')}>
          <RadiusUprightOutlined />
          topRight
        </Button>
        <Divider />
        <Button className="mr-2" type="primary" onClick={() => openNotification('bottomLeft')}>
          <RadiusBottomleftOutlined />
          bottomLeft
        </Button>
        <Button  className="mr-2" type="primary" onClick={() => openNotification('bottomRight')}>
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
      </div>
    );
  }
}

export default Placement;
