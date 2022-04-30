import React, { Component } from "react";
import { Input } from "antd";

const { TextArea } = Input;

export class Textarea extends Component {
  render() {
    return <TextArea rows={4} />;
  }
}

export default Textarea;
