import React, { Component } from 'react'
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.md';
import BasicAnnotationMd from './markdown/BasicAnnotation.md';
import BasicMarkerMd from './markdown/BasicMarker.md';
import BasicWorldMapMd from './markdown/BasicWorldMap.md';
import CustomMarkerMd from './markdown/CustomMarker.md';
import EuropeMapWithGraticuleMd from './markdown/EuropeMapWithGraticule.md';
import GraticuleMd from './markdown/Graticule.md';
import MapChartWithTextureMd from './markdown/MapChartWithTexture.md';
import MapChartWithTooltipMd from './markdown/MapChartWithTooltip.md';
import ChoroplethMapQuantileMd from './markdown/ChoroplethMapQuantile.md';
import ChoroplethMapQuantizeMd from "./markdown/ChoroplethMapQuantize.md";
import StateMapMd from './markdown/StateMap.md';
import ChoroplethMapMd from './markdown/ChoroplethMap.md';
import ZoomingAndPannningMd from './markdown/ZoomingAndPannning.md';
import BasicAnnotation from './BasicAnnotation';
import BasicMarker from './BasicMarker';
import BasicWorldMap from './BasicWorldMap';
import CustomMarker from './CustomMarker';
import EuropeMapWithGraticule from './EuropeMapWithGraticule';
import Graticule from './Graticule';
import MapChartWithTexture from './MapChartWithTexture';
import MapChartWithTooltip from './MapChartWithTooltip';
import ChoroplethMapQuantile from './ChoroplethMapQuantile';
import ChoroplethMapQuantize from "./ChoroplethMapQuantize";
import StateMap from './StateMap';
import ChoroplethMap from './ChoroplethMap';
import ZoomingAndPannning from './ZoomingAndPannning';

export class SimpleMap extends Component {
	render() {
		return (
			<React.Fragment>
        <DemoCard code={BasicAnnotationMd}><BasicAnnotation /></DemoCard>
				<DemoCard code={BasicMarkerMd}><BasicMarker /></DemoCard>
				<DemoCard code={BasicWorldMapMd}><BasicWorldMap /></DemoCard>
				<DemoCard code={CustomMarkerMd}><CustomMarker /></DemoCard>
				<DemoCard code={EuropeMapWithGraticuleMd}><EuropeMapWithGraticule /></DemoCard>
				<DemoCard code={GraticuleMd}><Graticule /></DemoCard>
				<DemoCard code={MapChartWithTextureMd}><MapChartWithTexture /></DemoCard>
				<DemoCard code={MapChartWithTooltipMd}><MapChartWithTooltip /></DemoCard>
				<DemoCard code={ChoroplethMapQuantileMd}><ChoroplethMapQuantile /></DemoCard>
				<DemoCard code={ChoroplethMapQuantizeMd}><ChoroplethMapQuantize /></DemoCard>
				<DemoCard code={StateMapMd}><StateMap /></DemoCard>
				<DemoCard code={ChoroplethMapMd}><ChoroplethMap /></DemoCard>
				<DemoCard code={ZoomingAndPannningMd}><ZoomingAndPannning /></DemoCard>
				<ApiContainer code={IndexMd} /> 
			</React.Fragment>
		)
	}
}

export default SimpleMap
