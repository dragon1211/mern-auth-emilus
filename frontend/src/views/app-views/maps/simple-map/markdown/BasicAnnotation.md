---
  en-US: Basic Annotation
---

## zh-CN


## en-US
The above map shows how to add a basic annotation using the react-simple-maps `<Annotation />`component.

```jsx
import React, { Component } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export class BasicAnnotation extends Component {
	render() {
		return (
			<ComposableMap
				projection="geoAzimuthalEqualArea"
				height={200}
				projectionConfig={{
					rotate: [-20.0, -52.0, 0],
					scale: 500
				}}
			>
				<Geographies
					geography={geoUrl}
					fill="#D6D6DA"
					stroke="#FFFFFF"
					strokeWidth={0.5}
				>
					{({ geographies }) =>
						geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
					}
				</Geographies>
				<Annotation
					subject={[2.3522, 48.8566]}
					dx={-90}
					dy={-30}
					connectorProps={{
						stroke: "#FF5533",
						strokeWidth: 3,
						strokeLinecap: "round"
					}}
				>
					<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
						{"Paris"}
					</text>
				</Annotation>
			</ComposableMap>
		)
	}
}

export default BasicAnnotation
```
