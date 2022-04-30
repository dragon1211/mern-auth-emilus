---
  en-US: Bar Chart
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import { COLOR_1, COLOR_1_LIGHT } from 'constants/ChartConstant';

export class BarChart extends Component {
	render() {

		const data = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011'],
      datasets: [
        {
          label: 'Series A',
					data: [65, 59, 80, 81, 56, 55],
					backgroundColor: COLOR_1,
          borderWidth: 0
				},
				{
          label: 'Series B',
					data: [28, 48, 40, 19, 86, 27],
					backgroundColor: COLOR_1_LIGHT,
          borderWidth: 0
        }
      ]
    };
    const options = {
      caleShowVerticalLines: false,
			responsive: true,
			scales: {
				xAxes: [{
					categoryPercentage: 0.45,
					barPercentage: 0.70,
					display: true,
					scaleLabel: {
						display: false,
						labelString: 'Month'
					},
					gridLines: false,
					ticks: {
						display: true,
						beginAtZero: true,
						fontSize: 13,
						padding: 10
					}
				}],
				yAxes: [{
					categoryPercentage: 0.35,
					barPercentage: 0.70,
					display: true,
					scaleLabel: {
						display: false,
						labelString: 'Value'
					},
					gridLines: {
						drawBorder: false,
						offsetGridLines: false,
						drawTicks: false,
						borderDash: [3, 4],
						zeroLineWidth: 1,
						zeroLineBorderDash: [3, 4]
					},
					ticks: {
						max: 100,                            
						stepSize: 20,
						display: true,
						beginAtZero: true,
						fontSize: 13,
						padding: 10
					}
				}]
			}
    }

		return (
			<div>
				<Bar
          data={data}
          options={options}
        />
			</div>
		)
	}
}

export default BarChart

```
