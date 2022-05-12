---
  en-US: Basic Bar
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLORS } from 'constants/ChartConstant';

export class BasicBar extends Component {
	state = {
		series: [{
			data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
		}],
		options: {
			plotOptions: {
				bar: {
					horizontal: true,
				}
			},
			colors: COLORS,
			dataLabels: {
				enabled: false
			},
			xaxis: {
				categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
					'United States', 'China', 'Germany'
				],
			}
		},
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="bar"
				height= {300}
			/>
		)
	}
}

export default BasicBar
```
