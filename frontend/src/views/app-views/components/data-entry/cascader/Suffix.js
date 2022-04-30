import React, { Component } from "react";
import { SmileOutlined } from '@ant-design/icons';
import { Cascader } from "antd";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

function onChange(value) {
  console.log(value);
}

export class Suffix extends Component {
  render() {
    return (
      <div>
        <Cascader
          suffixIcon={<SmileOutlined />}
          style={{ marginRight: "1rem" }}
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
        <Cascader
          suffixIcon="ab"
          style={{ marginTop: "1rem" }}
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
      </div>
    );
  }
}

export default Suffix;
