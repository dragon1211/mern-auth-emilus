import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AlternateMd from './markdown/alternate.md';
import ColorMd from './markdown/color.md';
import CustomMd from './markdown/custom.md';
import LabelMd from './markdown/label.md';
import PendingMd from './markdown/pending.md';
import RightMd from './markdown/right.md';
import Basic from './Basic';
import Alternate from './Alternate';
import Color from './Color';
import Custom from './Custom';
import Label from './Label';
import Pending from './Pending';
import Right from './Right';

export class TimelineComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={PendingMd}><Pending /></DemoCard>
						<DemoCard code={CustomMd}><Custom /></DemoCard>
            <DemoCard code={LabelMd}><Label /></DemoCard>
					</Col>
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={ColorMd}><Color /></DemoCard>
						<DemoCard code={AlternateMd}><Alternate /></DemoCard>
						<DemoCard code={RightMd}><Right /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default TimelineComponent;
