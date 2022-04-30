import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CustomizeHighlightMd from './markdown/customizeHighlight.md';
import OnChangeMd from './markdown/onChange.md';
import OnClickMd from './markdown/onClick.md';
import StaticMd from './markdown/static.md';
import TargetOffsetMd from './markdown/targetOffset.md';
import Basic from './Basic';
import CustomizeHighlight from './CustomizeHighlight';
import OnChange from './OnChange';
import OnClick from './OnClick';
import Static from './Static';
import TargetOffset from './TargetOffset';

export class AnchorComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <div id="components-anchor-demo-basic">
              <DemoCard code={BasicMd}><Basic /></DemoCard>
            </div>
            <div id="components-anchor-demo-static">
              <DemoCard code={OnClickMd}><OnClick /></DemoCard>
            </div>
            <div id="components-anchor-demo-basic">
              <DemoCard code={TargetOffsetMd}><TargetOffset /></DemoCard>
            </div>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={StaticMd}><Static /></DemoCard>
            <DemoCard code={CustomizeHighlightMd}><CustomizeHighlight /></DemoCard>
            <DemoCard code={OnChangeMd}><OnChange /></DemoCard>
          </Col>
        </Row>
        <div id="API">
          <ApiContainer code={IndexMd} />
        </div>
      </React.Fragment>
    );
  }
}

export default AnchorComponent;
