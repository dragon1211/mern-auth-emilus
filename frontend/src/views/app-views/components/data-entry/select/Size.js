import React, { Component } from "react";
import { Select, Radio } from "antd";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

export class Size extends Component {
  state = {
    size: "default"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Select
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </Select>
        <br />
        <br />
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          {children}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          {children}
        </Select>
      </div>
    );
  }
}

export default Size;
