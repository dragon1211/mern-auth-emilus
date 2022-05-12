import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLOR_1, COLOR_2, COLOR_4 } from 'constants/ChartConstant';

export class BasicColumn extends Component {
	state = {   
		series: [{
			name: 'Net Profit',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
			name: 'Revenue',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}, {
			name: 'Free Cash Flow',
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
		}],
		options: {
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded'
				},
			},
			colors: [COLOR_1, COLOR_2, COLOR_4],
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: val => (`$${val} thousands`)
				}
			}
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

export default BasicColumn
