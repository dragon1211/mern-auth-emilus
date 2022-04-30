---
  en-US: Spline Area
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLORS } from 'constants/ChartConstant';

export class SplineArea extends Component {
	state = {
		series: [{
			name: 'series1',
			data: [31, 40, 28, 51, 42, 109, 100]
		}, {
			name: 'series2',
			data: [11, 32, 45, 32, 34, 52, 41]
		}],
		options: {
			dataLabels: {
				enabled: false
			},
			colors: COLORS,
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				type: 'datetime',
				categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
		},
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="area"
				height= {300}
			/>
		)
	}
}

export default SplineArea
```
