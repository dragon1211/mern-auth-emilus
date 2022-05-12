import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLOR_2 } from 'constants/ChartConstant';

export class BasicLine extends Component {
	state = {
		series: [{
			name: "Desktops",
			data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
		}],
		options: {
			chart: {
				type: 'line',
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: 3,
			},
			colors: [COLOR_2],
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
			}
		}
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				height= {300}
			/>
		)
	}
}

export default BasicLine
