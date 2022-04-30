import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CustomMd from './markdown/custom.md'
import Basic from './Basic';
import Custom from './Custom'

export class BackTopComponent extends Component {
  render() {
    return (
      <div>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={BasicMd}><Basic /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={CustomMd}><Custom /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </div>
    );
  }
}

export default BackTopComponent;
