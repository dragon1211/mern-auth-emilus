import React, { Component, useState } from "react";
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

const Complete = () => {
  const [result, setResult] = useState([]);

  const handleSearch = value => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }

    setResult(res);
  };

  const children = result.map(email => (
    <Option key={email} value={email}>
      {email}
    </Option>
  ));
  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
    >
      {children}
    </AutoComplete>
  );
};

export class AutoCompleteOption extends Component {
  
  render() {
    return (
      <Complete />
    )
  }
}

export default AutoCompleteOption;
