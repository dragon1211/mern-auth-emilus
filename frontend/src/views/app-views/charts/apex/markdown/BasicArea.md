---
  en-US: Basic Area
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLOR_1 } from 'constants/ChartConstant';

const series = {
	monthDataSeries1: {
		prices: [
			8107.85,
			8128.0,
			8122.9,
			8165.5,
			8340.7,
			8423.7,
			8423.5,
			8514.3,
			8481.85,
			8487.7,
			8506.9,
			8626.2,
			8668.95,
			8602.3,
			8607.55,
			8512.9,
			8496.25,
			8600.65,
			8881.1,
			9340.85
		],
		dates: [
			"13 Nov 2017",
			"14 Nov 2017",
			"15 Nov 2017",
			"16 Nov 2017",
			"17 Nov 2017",
			"20 Nov 2017",
			"21 Nov 2017",
			"22 Nov 2017",
			"23 Nov 2017",
			"24 Nov 2017",
			"27 Nov 2017",
			"28 Nov 2017",
			"29 Nov 2017",
			"30 Nov 2017",
			"01 Dec 2017",
			"04 Dec 2017",
			"05 Dec 2017",
			"06 Dec 2017",
			"07 Dec 2017",
			"08 Dec 2017"
		]
	}
}

export class BasicArea extends Component {

	state = {
		series: [{
			name: "STOCK ABC",
			data: series.monthDataSeries1.prices
		}],
		options: {
			chart: {
				zoom: {
					enabled: false
				}
			},
			colors: [COLOR_1],
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0.9,
					stops: [0, 80, 100]
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: 3,
			},
			labels: series.monthDataSeries1.dates,
			xaxis: {
				type: 'datetime',
			},
			yaxis: {
				opposite: true
			},
			legend: {
				horizontalAlign: 'left'
			}
		}
	}


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

export default BasicArea
```
