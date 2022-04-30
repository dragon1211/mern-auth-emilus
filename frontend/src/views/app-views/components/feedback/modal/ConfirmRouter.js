import React, { Component } from "react";
import { Modal, Button } from "antd";

function destroyAll() {
  Modal.destroyAll();
}

const { confirm } = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }, i * 500);
  }
}

export class ConfirmRouter extends Component {
  render() {
    return <Button onClick={showConfirm}>Confirm</Button>;
  }
}

export default ConfirmRouter;
