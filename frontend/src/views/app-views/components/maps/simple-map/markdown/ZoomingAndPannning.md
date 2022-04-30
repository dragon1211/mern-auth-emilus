---
  en-US: Zooming and pannning
---

## zh-CN


## en-US
The above map shows how to use the `<ZoomableGroup />` component to render a map with pinch zoom and pan enabled.

```jsx
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  return (
    <div>
      <ComposableMap height={200} projectionConfig={{ scale: 80 }}>
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
```
