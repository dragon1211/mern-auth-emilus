---
  en-US: Basic World Map
---

## zh-CN


## en-US
The above example shows the easiest way to make a map chart with react-simple-maps. It uses a topojson file based on the Natural Earth world110m world map shapefile for geographic data.

This example focuses on displaying a basic map without zoom/pan capabilities. If you want to add zoomming or panning check out this example showing hot to use `<ZoomableGroup />`.

```jsx
import React, { Component } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export class BasicWorldMap extends Component {
	render() {
		return (
			<ComposableMap 
				height={200}
				projectionConfig={{
					scale: 100
				}}
			>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
					}
				</Geographies>
			</ComposableMap>
		)
	}
}

export default BasicWorldMap
```
