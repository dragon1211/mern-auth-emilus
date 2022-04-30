import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import { COLOR_1, COLOR_2, COLOR_TEXT } from 'constants/ChartConstant';

export class LineChart extends Component {
	render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Series A',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: 'transparent',
          borderColor: COLOR_1,
          pointBackgroundColor: COLOR_1,
          pointHoverBackgroundColor: COLOR_1,
          pointHoverBorderColor: COLOR_1
        },
        {
          label: 'Series B',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: 'transparent',
          borderColor: COLOR_2,
          pointBackgroundColor: COLOR_2,
          pointHoverBackgroundColor: COLOR_2,
          pointHoverBorderColor: COLOR_2
        }
      ]
    };
    const options = {
      responsive: true,
      hover: {
        mode: 'nearest',
        intersect: true
      },
      tooltips: {
        mode: 'index'
      },
      scales: {
        xAxes: [{ 
          gridLines: [{
            display: false,
          }],
          ticks: {
            display: true,
            fontColor: COLOR_TEXT,
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
            zeroLineBorderDash: [3, 4]  
          },
          ticks: {
            display: true,
            max: 100,                            
            stepSize: 20,
            fontColor: COLOR_TEXT,
            fontSize: 13,
            padding: 10
          }  
        }]
      }
    }
		return (
			<div>
        <Line data={data} options={options} />
      </div>
		)
	}
}

export default LineChart
