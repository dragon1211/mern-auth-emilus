import React, { Component } from "react";
import { Button, notification } from "antd";

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};

export class Basic extends Component {
  render() {
    return (
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    );
  }
}

export default Basic;
