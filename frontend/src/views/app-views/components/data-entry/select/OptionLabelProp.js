import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export class OptionLabelProp extends Component {
  render() {
    return (
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <span role="img" className="mr-2" aria-label="China">
            🇨🇳
          </span>
          China (中国)
        </Option>
        <Option value="usa" label="USA">
          <span role="img" className="mr-2" aria-label="USA">
            🇺🇸
          </span>
          USA (美国)
        </Option>
        <Option value="japan" label="Japan">
          <span role="img" className="mr-2" aria-label="Japan">
            🇯🇵
          </span>
          Japan (日本)
        </Option>
        <Option value="korea" label="Korea">
          <span role="img" className="mr-2" aria-label="Korea">
            🇰🇷
          </span>
          Korea (韩国)
        </Option>
      </Select>
    );
  }
}

export default OptionLabelProp;
