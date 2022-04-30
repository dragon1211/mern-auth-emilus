import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { COLOR_1, COLOR_2, COLOR_4 } from 'constants/ChartConstant';

export class DoughnutChart extends Component {
	render() {
		const data = {
			labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
      datasets: [
        {
          data: [350, 450, 100],
          backgroundColor: [COLOR_1, COLOR_4, COLOR_2],
        	pointBackgroundColor : [COLOR_1, COLOR_4, COLOR_2]
        }
      ]
		}
		return (
			<div>
				<Doughnut data={data}/>
			</div>
		)
	}
}

export default DoughnutChart
