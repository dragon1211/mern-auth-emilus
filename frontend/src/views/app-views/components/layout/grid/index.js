import React, { Component } from "react";
import DemoCard from "components/util-components/DemoCard";
import ApiContainer from "components/util-components/ApiContainer";
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import FlexAlignMd from './markdown/flex-align.md';
import FlexOrderMd from './markdown/flex-order.md';
import FlexStretchMd from './markdown/flex-stretch.md';
import FlexMd from './markdown/flex.md';
import GutterMd from './markdown/gutter.md';
import OffsetMd from './markdown/offset.md';
import PlayGroundMd from './markdown/playground.md';
import ResponsiveMoreMd from './markdown/responsive-more.md';
import ResponsiveMd from './markdown/responsive.md';
import SortMd from './markdown/sort.md';
import Basic from './Basic';
import Flex from './Flex';
import FlexAlign from './FlexAlign';
import FlexOrder from './FlexOrder';
import FlexStretch from './FlexStretch';
import Gutter from './Gutter';
import Offset from './Offeset';
import PlayGround from './Playground';
import ResponsiveMore from './ResponsiveMore';
import Responsive from './Responsive';
import Sort from './Sort';

export class GridComponent extends Component {
  render() {
    return (
			<div className="grid-demo">
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={GutterMd}><Gutter /></DemoCard>
				<DemoCard code={OffsetMd}><Offset /></DemoCard>
				<DemoCard code={SortMd}><Sort /></DemoCard>
				<DemoCard code={FlexMd}><Flex /></DemoCard>
				<DemoCard code={FlexAlignMd}><FlexAlign /></DemoCard>
				<DemoCard code={FlexOrderMd}><FlexOrder /></DemoCard>
				<DemoCard code={FlexStretchMd}><FlexStretch /></DemoCard>
				<DemoCard code={ResponsiveMd}><Responsive /></DemoCard>
				<DemoCard code={ResponsiveMoreMd}><ResponsiveMore /></DemoCard>
				<div className="grid-demo-playground">
					<DemoCard code={PlayGroundMd}><PlayGround /></DemoCard>
				</div>
				<ApiContainer code={IndexMd}/>
			</div>
    );
  }
}

export default GridComponent;
