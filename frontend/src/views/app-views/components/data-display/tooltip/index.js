import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ArrowPointAtCenterMd from './markdown/arrow-point-at-center.md';
import PlacementMd from './markdown/placement.md';
import Basic from './Basic';
import ArrowPointAtCenter from './ArrowPointAtCenter';
import Placement from './Placement';

export class TooltipComponent extends Component {
  render() {
    return (
			<div className="code-box-tooltip-demo">
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={ArrowPointAtCenterMd}><ArrowPointAtCenter /></DemoCard>
					</Col>
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={PlacementMd}><Placement /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </div>
		);
  }
}

export default TooltipComponent;
