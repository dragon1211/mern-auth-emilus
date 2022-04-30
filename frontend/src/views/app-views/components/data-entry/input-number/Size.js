import React, { Component } from "react";
import { InputNumber } from "antd";

function onChange(value) {
  console.log("changed", value);
}

export class Size extends Component {
  render() {
    return (
      <div>
        <span className="mr-2">
          <InputNumber
            size="large"
            min={1}
            max={100000}
            defaultValue={3}
            onChange={onChange}
          />
        </span>
        <span className="mr-2">
          <InputNumber
            min={1}
            max={100000}
            defaultValue={3}
            onChange={onChange}
          />
        </span>
        <span className="mr-2">
          <InputNumber
            size="small"
            min={1}
            max={100000}
            defaultValue={3}
            onChange={onChange}
          />
        </span>
      </div>
    );
  }
}

export default Size;
