---
  en-US: Europe Map With Graticule
---

## zh-CN


## en-US
The above example shows how to use react-simple-maps to make a map of Europe with graticule. It uses the built-in geoAzimuthalEqualArea projection with custom rotation params.

```jsx
import React, { Component } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export class EuropeMapWithGraticule extends Component {
	render() {
		return (
			<ComposableMap
				projection="geoAzimuthalEqualArea"
				height={200}
				projectionConfig={{
					rotate: [-20.0, -52.0, 0],
					scale: 300
				}}
			>
				<Graticule stroke="#EAEAEC" />
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								fill="#9998A3"
								stroke="#EAEAEC"
							/>
						))
					}
				</Geographies>
			</ComposableMap>
		)
	}
}

export default EuropeMapWithGraticule
```
