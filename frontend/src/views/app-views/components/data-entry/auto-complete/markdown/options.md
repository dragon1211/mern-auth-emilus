---
order: 2
title:
  zh-CN: 自定义选项
  en-US: Customized
---

## zh-CN

也可以直接传 `AutoComplete.Option` 作为 `AutoComplete` 的 `children`，而非使用 `dataSource`。

## en-US

You could pass `AutoComplete.Option` as children of `AutoComplete`, instead of using `dataSource`。

```jsx
import React, { useState } from 'react';
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

ReactDOM.render(<Complete />, mountNode);
```
