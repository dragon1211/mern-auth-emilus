import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AnimationMd from './markdown/animation.md';
import CheckableMd from './markdown/checkable.md';
import ColorfulMd from './markdown/colorful.md';
import ControlMd from './markdown/control.md';
import ControlledMd from './markdown/controlled.md';
import HotTagsMd from './markdown/hot-tags.md';
import StatusMd from './markdown/status.md';
import Basic from './Basic';
import Animation from './Animation';
import Checkable from './Checkable';
import Colorful from './Colorful';
import Control from './Control';
import Controlled from './Controlled';
import HotTags from './HotTags';
import Status from './Status'; 

export class TagComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={ControlMd}><Control /></DemoCard>
						<DemoCard code={HotTagsMd}><HotTags /></DemoCard>
						<DemoCard code={AnimationMd}><Animation /></DemoCard>
					</Col>
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={ColorfulMd}><Colorful /></DemoCard>
						<DemoCard code={CheckableMd}><Checkable /></DemoCard>
						<DemoCard code={ControlledMd}><Controlled /></DemoCard>
						<DemoCard code={StatusMd}><Status /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default TagComponent;
