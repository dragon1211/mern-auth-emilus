import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLOR_1, COLOR_2, COLOR_4 } from 'constants/ChartConstant';

export class StackedColumn extends Component {
	state = {
		series: [{
			name: 'PRODUCT A',
			data: [44, 55, 41, 67, 22, 43]
		}, {
			name: 'PRODUCT B',
			data: [13, 23, 20, 8, 13, 27]
		}, {
			name: 'PRODUCT C',
			data: [11, 17, 15, 15, 21, 14]
		}],
		options: {
			chart: {
				stacked: true,
				toolbar: {
					show: true
				},
				zoom: {
					enabled: true
				}
			},
			colors: [COLOR_1, COLOR_2, COLOR_4],
			responsive: [{
				breakpoint: 480,
				options: {
					legend: {
						position: 'bottom',
						offsetX: -10,
						offsetY: 0
					}
				}
			}],
			plotOptions: {
				bar: {
					horizontal: false,
				},
			},
			xaxis: {
				type: 'datetime',
				categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
					'01/05/2011 GMT', '01/06/2011 GMT'
				],
			},
			legend: {
				position: 'right',
				offsetY: 40
			},
			fill: {
				opacity: 1
			}
		}
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

export default StackedColumn
