---
category: Components
type: Data Display
title: react-chartjs-2
---

React wrapper for Chart.js 2, github link [https://github.com/jerairrest/react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)

## Props

| Property | Type
| --- | --- |
| data | (PropTypes.object \| PropTypes.func).isRequired, |
| width | PropTypes.number |
| height | PropTypes.number |
| id | PropTypes.string |
| legend | PropTypes.object |
| options | PropTypes.object |
| redraw | PropTypes.bool |
| getDatasetAtEvent | PropTypes.func |
| getElementAtEvent | PropTypes.func |
| getElementsAtEvent | PropTypes.func |
| onElementsClick | PropTypes.func // alias for getElementsAtEvent (backward compatibility)|


### Custom size
In order for Chart.js to obey the custom size you need to set `maintainAspectRatio` to false, example:

```js
<Bar
  data={data}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
```

### Chart.js instance
Chart.js instance can be accessed by placing a ref to the element as:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartReference); // returns a Chart.js instance reference
  }

  render() {
    return (<Doughnut ref={this.chartReference} data={data} options={options} />)
  }
}
```

### Getting context for data generation
Canvas node and hence context, that can be used to create CanvasGradient background,
is passed as argument to data if given as function:

This approach is useful when you want to keep your components pure.

```js
render() {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0,0,100,0);
    ...
    return {
      ...
      backgroundColor: gradient
      ...
    }
  }

  return (<Line data={data} />)
}
```

### Chart.js Defaults
Chart.js defaults can be set by importing the `defaults` object:

```javascript
import { defaults } from 'react-chartjs-2';

// Disable animating charts by default.
defaults.global.animation = false;
```

If you want to bulk set properties, try using the [lodash.merge](https://lodash.com/docs/#merge) function. This function will do a deep recursive merge preserving previously set values that you don't want to update.

```js
import { defaults } from 'react-chartjs-2';
import merge from 'lodash.merge';
// or
// import { merge } from 'lodash';

merge(defaults, {
  global: {
    animation: false,
    line: {
      borderColor: '#F85F73',
     },
  },
});
```

### Chart.js object

You can access the internal Chart.js object to register plugins or extend charts like this:

```JavaScript
import { Chart } from 'react-chartjs-2';

componentWillMount() {
  Chart.pluginService.register({
    afterDraw: function (chart, easing) {
      // Plugin code.
    }
  });
}
```

### Scatter Charts

If you're using Chart.js 2.6 and below, add the `showLines: false` property to your chart options. This was later [added](https://github.com/chartjs/Chart.js/commit/7fa60523599a56255cde78a49e848166bd233c6e) in the default config, so users of later versions would not need to do this extra step.

### Events

#### onElementsClick || getElementsAtEvent (function)

A function to be called when mouse clicked on chart elememts, will return all element at that point as an array. [Check](https://github.com/chartjs/Chart.js/blob/master/docs/09-Advanced.md#getelementsatevente)

```js
{
  onElementsClick: (elems) => {},
  getElementsAtEvent: (elems) => {},
  // `elems` is an array of chartElements
}

```
#### getElementAtEvent (function)

Calling getElementAtEvent(event) on your Chart instance passing an argument of an event, or jQuery event, will return the single element at the event position. If there are multiple items within range, only the first is returned [Check](https://github.com/chartjs/Chart.js/blob/master/docs/09-Advanced.md#getelementatevente)

```js
{
  getElementAtEvent: (elems) => {},
  // => returns the first element at the event point.
}
```

#### getDatasetAtEvent (function)

Looks for the element under the event point, then returns all elements from that dataset. This is used internally for 'dataset' mode highlighting [Check](https://github.com/chartjs/Chart.js/blob/master/docs/09-Advanced.md#getdatasetatevente)

```js
{
  getDatasetAtEvent: (dataset) => {}
  // `dataset` is an array of chartElements
}
```

### Working with Multiple Datasets

You will find that any event which causes the chart to re-render, such as hover tooltips, etc., will cause the first dataset to be copied over to other datasets, causing your lines and bars to merge together. This is because to track changes in the dataset series, the library needs a `key` to be specified - if none is found, it can't tell the difference between the datasets while updating. To get around this issue, you can take these two approaches:

1. Add a `label` property on each dataset. By default, this library uses the `label` property as the key to distinguish datasets.
2. Specify a different property to be used as a key by passing a `datasetKeyProvider` prop to your chart component, which would return a unique string value for each dataset.
