import React, { Component } from "react";
import { Input } from "antd";

export class PasswordInput extends Component {
  render() {
    return <Input.Password placeholder="input password" />;
  }
}

export default PasswordInput;
