import React, { Component } from 'react'
import GoogleMap  from 'google-map-react';
import { Tooltip } from 'antd';

const Marker = ({text}) => (
	<Tooltip title={`Location ${text}`}>
		<img className="cursor-pointer" src="/img/others/marker.png" alt="" />
	</Tooltip>
);

export class Hover extends Component {
	render() {
		return (
			<div style={{ height: '300px', width: '100%' }}>
				<GoogleMap
					// bootstrapURLKeys={{key: API_KEY}} // set if you need stats etc ...
					center={[59.938043, 30.337157]}
					zoom={8}
					hoverDistance={20}
					>
					<Marker lat={59.955413} lng={30.337844} text={'A'} />
					<Marker lat={59.724465} lng={30.080121} text={'B'} />
				</GoogleMap>
			</div>
		)
	}
}

export default Hover
