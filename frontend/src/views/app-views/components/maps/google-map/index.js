import React, { Component } from 'react'
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.md';
import SimpleMd from './markdown/Simple.md';
import HoverMd from './markdown/Hover.md';
import EventMd from './markdown/Event.md';
import Simple from './Simple';
import Hover from './Hover';
import Event from './Event';

export class GoogleMap extends Component {
	render() {
		return (
			<React.Fragment>
        <DemoCard code={SimpleMd}><Simple /></DemoCard>
				<DemoCard code={HoverMd}><Hover /></DemoCard>
				<DemoCard code={EventMd}><Event /></DemoCard>
				<ApiContainer code={IndexMd} /> 
			</React.Fragment>
		)
	}
}

export default GoogleMap
