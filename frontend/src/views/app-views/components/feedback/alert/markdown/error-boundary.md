---
order: 8
title:
  zh-CN: 错误处理
  en-US: ErrorBoundary
---

## zh-CN

友好的 [React 错误处理](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) 包裹组件。

## en-US

ErrorBoundary Component for making error handling easier in [React](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html).

```jsx
import React, { useState } from 'react';
import { Button, Alert } from 'antd';

const { ErrorBoundary } = Alert;

const ThrowError = () => {
  const [error, setError] = useState();

  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }

  return (
    <Button type="danger" onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

ReactDOM.render(
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>,
  mountNode,
);
```
