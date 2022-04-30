import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CustomIndicatorMd from './markdown/custom-indicator.md';
import DelayAndDebounceMd from './markdown/delayAndDebounce.md';
import InsideMd from './markdown/inside.md';
import NestedMd from './markdown/nested.md';
import SizeMd from './markdown/size.md';
import TipMd from './markdown/tip.md';
import Basic from './Basic';
import CustomIndicator from './CustomIndicator';
import DelayAndDebounce from './DelayAndDebounce';
import Inside from './Inside';
import Nested from './Nested';
import Size from './Size';
import Tip from './Tip';

export class SpinComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={BasicMd}><Basic /></DemoCard>
            <DemoCard code={InsideMd}><Inside /></DemoCard>
            <DemoCard code={TipMd}><Tip /></DemoCard>
            <DemoCard code={CustomIndicatorMd}><CustomIndicator /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={SizeMd}><Size /></DemoCard>
            <DemoCard code={NestedMd}><Nested /></DemoCard>
            <DemoCard code={DelayAndDebounceMd}><DelayAndDebounce /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default SpinComponent;
