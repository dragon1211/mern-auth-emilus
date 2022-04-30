import React, { Component } from 'react'
import {Radar} from 'react-chartjs-2';
import { COLOR_1, COLOR_1_LIGHT, COLOR_2, COLOR_2_LIGHT, COLOR_AXES } from 'constants/ChartConstant';

export class RadarChart extends Component {
	render() {

		const data = {
			labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			datasets: [
				{
					label: 'Series A',
					backgroundColor: COLOR_1_LIGHT,
					borderWidth: 2,
					borderColor: COLOR_1,
					data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
					label: 'Series B',
					backgroundColor: COLOR_2_LIGHT,
					borderWidth: 2,
					borderColor: COLOR_2,
					data: [28, 48, 40, 19, 96, 27, 100]
				}
			]
		};

		const option = {
			responsive: true,
			scale: {
				ticks: {
					max: 100,                            
					stepSize: 25,
				},
				gridLines: {
					color: COLOR_AXES
				},  
				angleLines: {
					color: COLOR_AXES
				}   
			} 
		}

		return (
			<div>
				<Radar data={data} options={option}/>
			</div>
		)
	}
}

export default RadarChart
