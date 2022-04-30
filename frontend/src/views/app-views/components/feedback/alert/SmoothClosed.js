import React, { Component, useState } from "react";
import { Alert } from "antd";

const App = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {visible ? (
        <Alert message="Alert Message Text" type="success" closable afterClose={handleClose} />
      ) : null}
      <p>placeholder text here</p>
    </div>
  );
};

export class SmoothClosed extends Component {

  render() {
    return (
      <App />
    );
  }
}

export default SmoothClosed;
