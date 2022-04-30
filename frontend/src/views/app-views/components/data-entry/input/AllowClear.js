import React, { Component } from "react";
import { Input } from "antd";

const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

export class AllowClear extends Component {
  render() {
    return (
      <div>
        <Input
          placeholder="input with clear icon"
          allowClear
          onChange={onChange}
        />
        <br />
        <br />
        <TextArea
          placeholder="textarea with clear icon"
          allowClear
          onChange={onChange}
        />
      </div>
    );
  }
}

export default AllowClear;
