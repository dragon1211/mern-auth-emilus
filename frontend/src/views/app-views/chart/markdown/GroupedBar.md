---
  en-US: Grouped Bar
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLORS } from 'constants/ChartConstant';

export class GroupedBar extends Component {
	state = {
		series: [{
			data: [44, 55, 41, 64]
		}, {
			data: [53, 32, 33, 52]
		}],
		options: {
			plotOptions: {
				bar: {
					horizontal: true,
					dataLabels: {
						position: 'top',
					},
				}
			},
			colors: COLORS,
			dataLabels: {
				enabled: true,
				offsetX: -6,
				style: {
					fontSize: '12px',
					colors: ['#fff']
				}
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['#fff']
			},
			xaxis: {
				categories: [2001, 2002, 2003, 2004],
			},
		}
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				height= {300}
				type="bar"
			/>
		)
	}
}

export default GroupedBar
```
