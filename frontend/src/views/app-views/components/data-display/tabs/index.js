import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CardTopMd from './markdown/card-top.md';
import CardMd from './markdown/card.md';
import CustomAddTriggerMd from './markdown/custom-add-trigger.md';
import CustomTabBarNodeMd from './markdown/custom-tab-bar-node.md';
import CustomTabBarMd from './markdown/custom-tab-bar.md';
import DisabledMd from './markdown/disabled.md';
import EditableCardMd from './markdown/editable-card.md';
import ExtraMd from './markdown/extra.md';
import IconMd from './markdown/icon.md';
import PositionMd from './markdown/position.md';
import SizeMd from './markdown/size.md';
import SlideMd from './markdown/slide.md';
import Basic from './Basic';
import CardTop from './CardTop';
import Card from './Card';
import CustomAddTrigger from './CustomAddTrigger';
import CustomTabBarNode from './CustomTabBarNode';
import CustomTabBar from './CustomTabBar';
import Disabled from './Disabled';
import EditableCard from './EditableCard';
import Extra from './Extra';
import Icon from './Icon';
import Position from './Position';
import Size from './Size';
import Slide from './Slide';
 
export class TabsComponent extends Component {
  render() {
    return (
      <React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={DisabledMd}><Disabled /></DemoCard>
				<DemoCard code={IconMd}><Icon /></DemoCard>
				<DemoCard code={SlideMd}><Slide /></DemoCard>
				<DemoCard code={ExtraMd}><Extra /></DemoCard>
				<DemoCard code={SizeMd}><Size /></DemoCard>
				<DemoCard code={PositionMd}><Position /></DemoCard>
				<DemoCard code={CardMd}><Card /></DemoCard>
				<DemoCard code={EditableCardMd}><EditableCard /></DemoCard>
				<div className="code-box-tab-cardtop-demo">
					<DemoCard code={CardTopMd}><CardTop /></DemoCard>
				</div>
				<DemoCard code={CustomAddTriggerMd}><CustomAddTrigger /></DemoCard>
				<DemoCard code={CustomTabBarMd}><CustomTabBar /></DemoCard>
				<DemoCard code={CustomTabBarNodeMd}><CustomTabBarNode /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default TabsComponent;
