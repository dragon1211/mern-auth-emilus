import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import DemoFrame from 'components/util-components/DemoFrame';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CustomTriggerMd from './markdown/custom-trigger.md';
import FixedSiderMd from './markdown/fixed-sider.md';
import FixedMd from './markdown/fixed.md';
import ResponsiveMd from './markdown/responsive.md';
import SideMd from './markdown/side.md';
import TopMd from './markdown/top.md';
import TopSideMd from './markdown/top-side.md';
import TopSide2Md from './markdown/top-side-2.md';
import Basic from './Basic';
import Top from './Top';
import TopSide from './TopSide';
import TopSide2 from './TopSide2';
import Side from './Side';
import CustomTrigger from './CustomTrigger';
import Responsive from './Responsive';
import Fixed from './Fixed';
import FixedSider from './FixedSider';

export class LayoutComponent extends Component {
  render() {
    return (
			<div className="code-box-layout-demo">
				<div className="demo-basic">
					<DemoCard code={BasicMd}><Basic /></DemoCard>
				</div>
				<DemoCard code={TopMd}><Top /></DemoCard>
				<DemoCard code={TopSide2Md}><TopSide2 /></DemoCard>
				<DemoCard code={TopSideMd}><TopSide /></DemoCard>
				<DemoCard code={SideMd}><DemoFrame height="400px"><Side/></DemoFrame></DemoCard>
				<div className="demo-custom-trigger">
					<DemoCard code={CustomTriggerMd}><CustomTrigger /></DemoCard>
				</div>
				<div className="demo-responsive">
					<DemoCard code={ResponsiveMd}><Responsive /></DemoCard>
				</div>
				<DemoCard code={FixedMd}><DemoFrame height="400px"><Fixed/></DemoFrame></DemoCard>
				<DemoCard code={FixedSiderMd}><DemoFrame height="400px"><FixedSider/></DemoFrame></DemoCard>
				<ApiContainer code={IndexMd}/>
			</div>
    );
  }
}

export default LayoutComponent;
