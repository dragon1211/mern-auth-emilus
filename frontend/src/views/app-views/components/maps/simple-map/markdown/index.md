---
category: Components
type: Data Display
title: react-simple-maps
---

A wrapper component for every mapchart built with react-simple-maps. It determines the map context, which is passed to all react-simple-maps components. The context contains information about the projection and path generator, as well as the dimensions of the mapchart.

Create beautiful SVG maps in react with d3-geo and topojson using a declarative api.

Read the [docs](https://www.react-simple-maps.io/docs/getting-started/), or check out the [examples](https://www.react-simple-maps.io/examples/).

## API

### ComposableMap

|Name|Type|Default|
|--- |--- |--- |
|width|Number|800|
|height|Number|600|
|projection|String \| Function|geoEqualEarth|
|projectionConfig|Object|{}|

### ZoomableGroup

|Name|Type|Default|
|--- |--- |--- |
|center|Array|[0, 0]|
|zoom|Number|1|
|minZoom|Number|1|
|maxZoom|Number|8|
|translateExtent|Array|[[-∞, -∞], [∞, ∞]]|
|onMoveStart|Function||
|onMove|Function||
|onMoveEnd|Function||


### Sphere

|Name|Type|Default|
|--- |--- |--- |
|id|String|rsm-sphere|
|fill|String|transparent|
|stroke|String|currentcolor|
|strokeWidth|Number|0.5|


### Graticule

|Name|Type|Default|
|--- |--- |--- |
|fill|String|transparent|
|stroke|String|currentcolor|
|step|Array|[10, 10]|

### Geographies

|Name|Type|Default|
|--- |--- |--- |
|geography|String | Object | Array||
|children|Function||
|parseGeographies|Function||

### Geography

|Name|Type|Default|
|--- |--- |--- |
|geography|Object||
|style|Object|{}|

### Marker

|Name|Type|Default|
|--- |--- |--- |
|coordinates|Array|[]|
|style|Object|{}|


### Line

|Name|Type|Default|
|--- |--- |--- |
|from|Array|[0, 0]|
|to|Array|[0, 0]|
|coordinates|Array|[]|
|stroke|String|currentcolor|
|strokeWidth|Number|3|
|fill|String|transparent|

### Annotation

|Name|Type|Default|
|--- |--- |--- |
|subject|Array|[]|
|dx|Number|30|
|dy|Number|30|
|curve|Number|0|
|connectorProps|Object||
