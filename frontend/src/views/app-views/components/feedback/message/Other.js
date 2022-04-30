import React, { Component } from "react";
import { message, Button } from "antd";

const success = () => {
  message.success("This is a success message");
};

const error = () => {
  message.error("This is an error message");
};

const warning = () => {
  message.warning("This is a warning message");
};

export class Other extends Component {
  render() {
    return (
      <div>
        <Button className="mr-2" onClick={success}>Success</Button>
        <Button className="mr-2" onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </div>
    );
  }
}

export default Other;
