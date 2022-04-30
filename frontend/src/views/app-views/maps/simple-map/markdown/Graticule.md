---
  en-US: Graticule
---

## zh-CN


## en-US
The above map shows how to render a world map with a graticule using react-simple-maps and the `<Graticule />` component.

```jsx
import React, { Component } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";

const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export class GraticuleMap extends Component {
	render() {
		return (
			<ComposableMap projectionConfig={{ scale: 80 }} height={200}>
				<Graticule stroke="#F53" />
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
					}
				</Geographies>
			</ComposableMap>
		)
	}
}

export default GraticuleMap
```
