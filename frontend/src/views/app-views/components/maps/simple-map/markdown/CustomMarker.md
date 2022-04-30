---
  en-US: Custom Marker
---

## zh-CN


## en-US
The above example shows how to add custom SVG markers to a map.

```jsx
import React, { Component } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

export class CustomMarker extends Component {
	render() {
		return (
			<ComposableMap
				projection="geoAzimuthalEqualArea"
				height={200}
				projectionConfig={{
					rotate: [58, 20, 0],
					scale: 150
				}}
			>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies
							.filter(d => d.properties.REGION_UN === "Americas")
							.map(geo => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill="#EAEAEC"
									stroke="#D6D6DA"
								/>
							))
					}
				</Geographies>
				{markers.map(({ name, coordinates, markerOffset }) => (
					<Marker key={name} coordinates={coordinates}>
						<g
							fill="none"
							stroke="#FF5533"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							transform="translate(-12, -24)"
						>
							<circle cx="12" cy="10" r="3" />
							<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
						</g>
						<text
							textAnchor="middle"
							y={markerOffset}
							style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
						>
							{name}
						</text>
					</Marker>
				))}
			</ComposableMap>
		)
	}
}

export default CustomMarker

```
