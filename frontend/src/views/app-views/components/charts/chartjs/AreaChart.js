import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { COLOR_1, COLOR_1_LIGHT, COLOR_TEXT } from 'constants/ChartConstant';

export class AreaChart extends Component {
	render() {

		const data = {
      labels: ["16th", "17th", "18th", "19th", "20th", "21th", "22th"],
      datasets: [
        {
          label: 'Series A',
          data: [28, 48, 40, 55, 86, 55, 90],
          backgroundColor: COLOR_1_LIGHT,
          borderColor: COLOR_1,
          pointBackgroundColor: COLOR_1,
          pointHoverBackgroundColor: COLOR_1,
					pointHoverBorderColor: COLOR_1
        }
      ]
    };
    const options = {
      responsive: true,
			hover: {
				mode: 'nearest',
				intersect: true
			},
			elements: {
				line: {
					tension: 0.5
				},
				point: { 
					radius: 0 
				}
			},
			scales: {
				xAxes: [{ 
					gridLines: [{
						display: false,
					}],
					ticks: {
						fontColor: COLOR_TEXT,
						display: true,
						beginAtZero: true,
						fontSize: 13,
						padding: 10
					}
				}],
				yAxes: [{
					gridLines: {
						drawBorder: false,
						drawTicks: false,
						borderDash: [3, 4],
						zeroLineWidth: 1,
						zeroLineBorderDash: [3, 4],
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}    
					},
					ticks: {
						max: 100,                            
						stepSize: 20,
						display: true,
						beginAtZero: true,
						fontColor: COLOR_TEXT,
						fontSize: 13,
						padding: 10
					}
				}],
			}
    }
		return (
			<div>
        <Line data={data} options={options} />
      </div>
		)
	}
}

export default AreaChart
