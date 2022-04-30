import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AsyncMd from './markdown/async.md';
import ButtonPropsMd from './markdown/button-props.md';
import ConfirmPromiseMd from './markdown/confirm-promise.md';
import ConfirmRouterMd from './markdown/confirm-router.md';
import ConfirmMd from './markdown/confirm.md';
import FooterMd from './markdown/footer.md';
import InfoMd from './markdown/info.md';
import LocaleMd from './markdown/locale.md';
import ManualMd from './markdown/manual.md';
import PositionMd from './markdown/position.md';
import Basic from './Basic';
import Async from './Async';
import ButtonProps from './ButtonProps';
import ConfirmPromise from './ConfirmPromise';
import ConfirmRouter from './ConfirmRouter';
import Confirm from './Confirm';
import Footer from './Footer';
import Info from './Info';
import Locale from './Locale';
import Manual from './Manual';
import Position from './Position';

export class ModalComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={BasicMd}><Basic /></DemoCard>
            <DemoCard code={FooterMd}><Footer /></DemoCard>
            <DemoCard code={ConfirmPromiseMd}><ConfirmPromise /></DemoCard>
            <DemoCard code={LocaleMd}><Locale /></DemoCard>
            <DemoCard code={PositionMd}><Position /></DemoCard>
            <DemoCard code={ButtonPropsMd}><ButtonProps /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={AsyncMd}><Async /></DemoCard>
            <DemoCard code={ConfirmMd}><Confirm /></DemoCard>
            <DemoCard code={InfoMd}><Info /></DemoCard>
            <DemoCard code={ManualMd}><Manual /></DemoCard>
            <DemoCard code={ConfirmRouterMd}><ConfirmRouter /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default ModalComponent;
