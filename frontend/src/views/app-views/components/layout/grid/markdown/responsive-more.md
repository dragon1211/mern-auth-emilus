---
order: 8
title:
  zh-CN: 其他属性的响应式
  en-US: More responsive
---

## zh-CN


## en-US

`span` `pull` `push` `offset` `order` property can be embedded into `xs` `sm` `md` `lg` `xl` properties to use, where `xs={6}` is equivalent to `xs={{span: 6}}`.

```jsx
import { Row, Col } from 'antd';

ReactDOM.render(
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
  </Row>,
  mountNode,
);
```
