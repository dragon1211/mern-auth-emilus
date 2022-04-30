import React, { Component, useState } from "react";
import { AutoComplete, Input } from 'antd';

const { TextArea } = Input;

const Complete = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = value => {
    setOptions(
      !value
        ? []
        : [
            {
              value,
            },
            {
              value: value + value,
            },
            {
              value: value + value + value,
            },
          ],
    );
  };

  const handleKeyPress = ev => {
    console.log('handleKeyPress', ev);
  };

  const onSelect = value => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      options={options}
      style={{
        width: 200,
      }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{
          height: 50,
        }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  );
};

export class Custom extends Component {
  
  render() {
   
    return (
      <Complete/>
    );
  }
}

export default Custom;
