import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import DurationMd from './markdown/duration.md';
import InfoMd from './markdown/info.md';
import LoadingMd from './markdown/loading.md';
import OtherMd from './markdown/other.md';
import ThenableMd from './markdown/thenable.md';
import UpdateMd from './markdown/update.md';
import Duration from './Duration';
import Info from './Info';
import Loading from './Loading';
import Other from './Other';
import Thenable from './Thenable';
import Update from './Update';
 
export class MessageComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={InfoMd}><Info /></DemoCard>
            <DemoCard code={DurationMd}><Duration /></DemoCard>
            <DemoCard code={ThenableMd}><Thenable /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={OtherMd}><Other /></DemoCard>
            <DemoCard code={LoadingMd}><Loading /></DemoCard>
            <DemoCard code={UpdateMd}><Update /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default MessageComponent;
