import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import BannerMd from './markdown/banner.md';
import ClosableMd from './markdown/closable.md';
import CloseTextMd from './markdown/close-text.md';
import DescriptionMd from './markdown/description.md';
import IconMd from './markdown/icon.md';
import SmoothClosedMd from './markdown/smooth-closed.md';
import StyleMd from './markdown/style.md';
import ErrorBoundryMd from './markdown/error-boundary.md';
import DemoFrame from "components/util-components/DemoFrame";
import Basic from './Basic';
import Banner from './Banner';
import Closable from './Closable';
import CloseText from './CloseText';
import Description from './Description';
import Icon from './Icon';
import SmoothClosed from './SmoothClosed';
import Style from './Style';
import ErrorBoundry from './ErrorBoundary';

export class AlertComponent extends Component {
  render() {
    return (
      <div className="code-box-alert-demo">
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={BasicMd}><Basic /></DemoCard>
            <DemoCard code={ClosableMd}><Closable /></DemoCard>
            <DemoCard code={IconMd}><Icon /></DemoCard>
            <DemoCard code={BannerMd}><DemoFrame height="250px"><Banner /></DemoFrame></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={StyleMd}><Style /></DemoCard>
            <DemoCard code={DescriptionMd}><Description /></DemoCard>
            <DemoCard code={CloseTextMd}><CloseText /></DemoCard>
            <DemoCard code={SmoothClosedMd}><SmoothClosed /></DemoCard>
            <DemoCard code={ErrorBoundryMd}><ErrorBoundry /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </div>
    );
  }
}

export default AlertComponent;
