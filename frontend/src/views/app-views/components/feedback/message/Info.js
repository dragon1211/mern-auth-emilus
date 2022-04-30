import React, { Component } from "react";
import { message, Button } from "antd";

const info = () => {
  message.info("This is a normal message");
};

export class Info extends Component {
  render() {
    return (
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    );
  }
}

export default Info;
