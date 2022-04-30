import React, { Component } from "react";
import { Modal, Button } from "antd";

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: "Do you Want to delete these items?",
    content: "Some descriptions",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}

function showDeleteConfirm() {
  confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}

function showPropsConfirm() {
  confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    okButtonProps: {
      disabled: true
    },
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}

export class Confirm extends Component {
  render() {
    return (
      <div>
        <Button className="mr-2" onClick={showConfirm}>Confirm</Button>
        <Button className="mr-2" onClick={showDeleteConfirm} type="dashed">
          Delete
        </Button>
        <Button onClick={showPropsConfirm} type="dashed">
          With extra props
        </Button>
      </div>
    );
  }
}

export default Confirm;
