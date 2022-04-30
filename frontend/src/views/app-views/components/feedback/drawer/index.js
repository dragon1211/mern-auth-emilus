import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicRightMd from './markdown/basic-right.md';
import FormInDrawerMd from './markdown/form-in-drawer.md';
import MultiLevelDrawerMd from './markdown/multi-level-drawer.md';
import PlacementMd from './markdown/placement.md';
import RenderInCurrentMd from './markdown/render-in-current.md';
import UserProfileMd from './markdown/user-profile.md';
import BasicRight from './BasicRight';
import FormInDrawer from './FormInDrawer';
import MultiLevelDrawer from './MultiLevelDrawer';
import Placement from './Placement';
import RenderInCurrent from './RenderInCurrent';
import UserProfile from './UserProfile';

export class DrawerComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={BasicRightMd}><BasicRight /></DemoCard>
            <DemoCard code={RenderInCurrentMd}><RenderInCurrent /></DemoCard>
            <DemoCard code={UserProfileMd}><UserProfile /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={PlacementMd}><Placement /></DemoCard>
            <DemoCard code={FormInDrawerMd}><FormInDrawer /></DemoCard>
            <DemoCard code={MultiLevelDrawerMd}><MultiLevelDrawer /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default DrawerComponent;
