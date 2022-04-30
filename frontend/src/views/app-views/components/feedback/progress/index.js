import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import CircleDynamicMd from './markdown/circle-dynamic.md';
import CircleMiniMd from './markdown/circle-mini.md';
import CircleMd from './markdown/circle.md';
import DashboardMd from './markdown/dashboard.md';
import DynamicMd from './markdown/dynamic.md';
import FormatMd from './markdown/format.md';
import GradientLineMd from './markdown/gradient-line.md';
import LineMiniMd from './markdown/line-mini.md';
import LineMd from './markdown/line.md';
import LinecapMd from './markdown/linecap.md';
import SegmentMd from './markdown/segment.md';
import StpesMd from './markdown/steps.md';
import CircleDynamic from './CircleDynamic';
import CircleMini from './CircleMini';
import Circle from './Circle';
import Dashboard from './Dashboard';
import Dynamic from './Dynamic';
import Format from './Format';
import GradientLine from './GradientLine';
import LineMini from './LineMini';
import Line from './Line';
import Linecap from './Linecap';
import Segment from './Segment';
import Stpes from './Steps';
 
export class ProgressComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={LineMd}><Line /></DemoCard>
            <DemoCard code={LineMiniMd}><LineMini /></DemoCard>
            <DemoCard code={CircleDynamicMd}><CircleDynamic /></DemoCard>
            <DemoCard code={FormatMd}><Format /></DemoCard>
            <DemoCard code={SegmentMd}><Segment /></DemoCard>
            <DemoCard code={GradientLineMd}><GradientLine /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={CircleMd}><Circle /></DemoCard>
            <DemoCard code={CircleMiniMd}><CircleMini /></DemoCard>
            <DemoCard code={DynamicMd}><Dynamic /></DemoCard>
            <DemoCard code={DashboardMd}><Dashboard /></DemoCard>
            <DemoCard code={LinecapMd}><Linecap /></DemoCard>
            <DemoCard code={StpesMd}><Stpes /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default ProgressComponent;
