---
  en-US: Polar Chart
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import { Polar } from 'react-chartjs-2';
import { COLORS, COLORS_LIGHT ,COLOR_AXES } from 'constants/ChartConstant';

export class PolarChart extends Component {
	render() {
		const data = {
			datasets: [{
				data: [300, 500, 100, 40, 120],
				backgroundColor: COLORS_LIGHT,
				borderColor: COLORS,
				label: 'My dataset' 
			}],
			labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales']
		};

		const option = {
			responsive: true,
			scale: {
				ticks: {
					max: 500,                            
					stepSize: 100,
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
				<Polar data={data} options={option}/>
			</div>
		)
	}
}

export default PolarChart
```
