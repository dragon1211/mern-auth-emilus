import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CheckAllMd from './markdown/check-all.md';
import ControllerMd from './markdown/controller.md';
import DisabledMd from './markdown/disabled.md';
import GroupMd from './markdown/group.md';
import LayoutMd from './markdown/layout.md';
import Basic from './Basic';
import CheckAll from './CheckAll';
import Controller from './Controller';
import Disabled from './Disabled';
import Group from './Group';
import Layout from './Layout';

export class CheckboxComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={BasicMd}><Basic /></DemoCard>
            <DemoCard code={ControllerMd}><Controller /></DemoCard>
            <DemoCard code={CheckAllMd}><CheckAll /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={DisabledMd}><Disabled /></DemoCard>
            <DemoCard code={GroupMd}><Group /></DemoCard>
            <DemoCard code={LayoutMd}><Layout /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default CheckboxComponent;
