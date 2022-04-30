import React, { Component } from "react";
import { Alert } from 'antd';

export class CloseText extends Component {
  render() {
    return (
      <Alert message="Info Text" type="info" closeText="Close Now" />
    );
  }
}

export default CloseText;
