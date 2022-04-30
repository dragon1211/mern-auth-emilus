---
category: Components
type: General
title: Button
---

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

In Ant Design we provide 4 types of button.

- Primary button: indicate the main action, one primary button at most in one section.
- Default button: indicate a series of actions without priority.
- Dashed button: used for adding action commonly.
- Link button: used for external links.

And 4 other properties additionally.

- `danger`: used for actions of risk, like deletion or authorization.
- `ghost`: used in situations with complex background, home pages usually.
- `disabled`: when actions is not available.
- `loading`: add loading spinner in button, avoiding multiple submits too.

## API

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | disabled state of button | boolean | `false` |  |
| ghost | make background transparent and invert text and border colors | boolean | `false` |  |
| href | redirect url of link button | string | - |  |
| htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | set the icon component of button | ReactNode | - |  |
| loading | set the loading status of button | boolean \| { delay: number } | `false` |  |
| shape | can be set to `circle`, `round` or omitted | string | - |  |
| size | can be set to `small` `large` or omitted | string | `default` |  |
| target | same as target attribute of a, works when href is specified | string | - |  |
| type | can be set to `primary` `ghost` `dashed` `link` or omitted (meaning `default`) | string | `default` |  |
| onClick | set the handler to handle `click` event | (event) => void | - |  |
| block | option to fit button width to its parent width | boolean | `false` |  |
| danger | set the danger status of button | boolean | `false` |  |

It accepts all props which native buttons support.
