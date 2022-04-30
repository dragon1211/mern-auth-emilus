import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ArrowPointAtCenterMd from './markdown/arrow-point-at-center.md';
import ControlMd from './markdown/control.md';
import HoverWithClickMd from './markdown/hover-with-click.md';
import PlacementMd from './markdown/placement.md';
import TriggerTypeMd from './markdown/triggerType.md';
import Basic from './Basic';
import ArrowPointAtCenter from './ArrowPointAtCenter';
import Control from './Control';
import HoverWithClick from './HoverWithClick';
import Placement from './Placement';
import TriggerType from './TriggerType';

export class PopoverComponent extends Component {
  render() {
    return (
      <div className="code-box-popover-demo">
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={PlacementMd}><Placement /></DemoCard>
						<DemoCard code={ArrowPointAtCenterMd}><ArrowPointAtCenter /></DemoCard>
					</Col>
          <Col sm={24} md={24} lg={12}>
					  <DemoCard code={TriggerTypeMd}><TriggerType /></DemoCard>
						<DemoCard code={ControlMd}><Control /></DemoCard>
            <DemoCard code={HoverWithClickMd}><HoverWithClick /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </div>
    );
  }
}

export default PopoverComponent;
