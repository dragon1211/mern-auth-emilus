---
  en-US: Simple
---

## zh-CN


## en-US


```jsx
import React, { Component } from 'react'
import GoogleMapReact  from 'google-map-react';

const Marker = () => (
	<img src="/img/others/marker.png" alt="" />
);

export class Simple extends Component {
	static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{key: API_KEY}} // set if you need stats etc ...
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Simple
```
