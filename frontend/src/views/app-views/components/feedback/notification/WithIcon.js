import React, { Component } from "react";
import { Button, notification } from "antd";

const openNotificationWithIcon = type => {
  notification[type]({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  });
};

export class WithIcon extends Component {
  render() {
    return (
      <div>
        <Button className="mr-2" onClick={() => openNotificationWithIcon("success")}>
          Success
        </Button>
        <Button className="mr-2" onClick={() => openNotificationWithIcon("info")}>Info</Button>
        <Button className="mr-2" onClick={() => openNotificationWithIcon("warning")}>
          Warning
        </Button>
        <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
      </div>
    );
  }
}

export default WithIcon;
