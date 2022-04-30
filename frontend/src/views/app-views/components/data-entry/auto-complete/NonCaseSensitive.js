import React, { Component } from "react";
import { AutoComplete } from 'antd';

const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];

const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

export class NonCaseSensitive extends Component {
  render() {
    return <Complete />;
  }
}

export default NonCaseSensitive;
