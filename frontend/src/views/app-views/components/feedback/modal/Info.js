import React, { Component } from "react";
import { Modal, Button } from "antd";

function info() {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {}
  });
}

function success() {
  Modal.success({
    content: "some messages...some messages..."
  });
}

function error() {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages..."
  });
}

function warning() {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages..."
  });
}

export class Info extends Component {
  render() {
    return (
      <div>
        <Button className="mr-2" onClick={info}>Info</Button>
        <Button className="mr-2" onClick={success}>Success</Button>
        <Button className="mr-2" onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </div>
    );
  }
}

export default Info;
