---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本使用。通过 dataSource 设置自动完成的数据源

## en-US

Basic Usage, set data source of autocomplete with `dataSource` property.

```jsx
import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const Complete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = searchText => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = data => {
    console.log('onSelect', data);
  };

  const onChange = data => {
    setValue(data);
  };

  return (
    <div>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </div>
  );
};

ReactDOM.render(<Complete />, mountNode);
```
