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
