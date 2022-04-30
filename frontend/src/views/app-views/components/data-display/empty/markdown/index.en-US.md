---
category: Components
type: Data Display
title: Empty
---

Empty state placeholder.

## When To Use

- When there is no data provided, display for friendly tips.
- User tutorial to create something in fresh new situation.

## API

```jsx
<Empty>
  <Button>Create</Button>
</Empty>
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| description | Customize description | string \| ReactNode | - | 3.12.0 |
| imageStyle | style of image | CSSProperties | - | 3.16.0 |
| image | Customize image. Will tread as image url when string provided. | string \| ReactNode | `Empty.PRESENTED_IMAGE_DEFAULT` | 3.12.0 |

## Built-in images

- Empty.PRESENTED_IMAGE_SIMPLE

- Empty.PRESENTED_IMAGE_DEFAULT
