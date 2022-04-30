import React, { Component } from "react";
import { message, Button } from "antd";

const success = () => {
  message
    .loading("Action in progress..", 2.5)
    .then(() => message.success("Loading finished", 2.5))
    .then(() => message.info("Loading finished is finished", 2.5));
};

export class Thenable extends Component {
  render() {
    return <Button onClick={success}>Display sequential messages</Button>;
  }
}

export default Thenable;
