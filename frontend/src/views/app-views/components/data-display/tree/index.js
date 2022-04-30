import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import BasicControlledMd from './markdown/basic-controlled.md';
import CustomizedIconMd from './markdown/customized-icon.md';
import DirectoryMd from './markdown/directory.md';
import DraggableMd from './markdown/draggable.md';
import DynamicMd from './markdown/dynamic.md';
import LineMd from './markdown/line.md';
import SearchMd from './markdown/search.md';
import VirtualScrollMd from './markdown/virtual-scroll.md';
import SwitcherIconMd from './markdown/switcher-icon.md';
import Basic from './Basic';
import BasicControlled from './BasicControlled';
import CustomizedIcon from './CustomizedIcon';
import Directory from './Directory';
import Draggable from './Draggable';
import Dynamic from './Dynamic';
import Line from './Line';
import Search from './Search';
import SwitcherIcon from './SwitcherIcon';
import VirtualScroll from './VirtualScroll';

export class TreeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={DraggableMd}><Draggable /></DemoCard>
						<DemoCard code={SearchMd}><Search /></DemoCard>
						<DemoCard code={CustomizedIconMd}><CustomizedIcon /></DemoCard>
						<DemoCard code={SwitcherIconMd}><SwitcherIcon /></DemoCard>
					</Col>
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicControlledMd}><BasicControlled /></DemoCard>
						<DemoCard code={DynamicMd}><Dynamic /></DemoCard>
						<DemoCard code={LineMd}><Line /></DemoCard>
						<DemoCard code={DirectoryMd}><Directory /></DemoCard>
            <DemoCard code={VirtualScrollMd}><VirtualScroll /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default TreeComponent;
