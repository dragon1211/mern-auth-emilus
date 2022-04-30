import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CustomIconMd from './markdown/custom-icon.md';
import CustomStyleMd from './markdown/custom-style.md';
import DurationMd from './markdown/duration.md';
import HooksMd from './markdown/hooks.md';
import PlacementMd from './markdown/placement.md';
import UpdateMd from './markdown/update.md';
import WithBtnMd from './markdown/with-btn.md';
import WithIconMd from './markdown/with-icon.md';
import Basic from './Basic';
import CustomIcon from './CustomIcon';
import CustomStyle from './CustomStyle';
import Duration from './Duration';
import Hooks from './Hooks';
import Placement from './Placement';
import Update from './Update';
import WithBtn from './WithBtn';
import WithIcon from './WithIcon';

export class NotificationComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={BasicMd}><Basic /></DemoCard>
            <DemoCard code={WithIconMd}><WithIcon /></DemoCard>
            <DemoCard code={CustomIconMd}><CustomIcon /></DemoCard>
            <DemoCard code={CustomStyleMd}><CustomStyle /></DemoCard>
            <DemoCard code={HooksMd}><Hooks /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={DurationMd}><Duration /></DemoCard>
            <DemoCard code={WithBtnMd}><WithBtn /></DemoCard>
            <DemoCard code={PlacementMd}><Placement /></DemoCard>
            <DemoCard code={UpdateMd}><Update /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default NotificationComponent;
