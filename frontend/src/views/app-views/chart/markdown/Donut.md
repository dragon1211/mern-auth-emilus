---
  en-US: Simple Donut
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLORS} from 'constants/ChartConstant';

export class Donut extends Component {
	state = {
		series: [44, 55, 41, 17, 15],
		options: {
			colors: COLORS,
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		}
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				height= {300}
				type="donut"
			/>
		)
	}
}

export default Donut
```
