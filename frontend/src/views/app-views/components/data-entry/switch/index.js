import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import DisabledMd from './markdown/disabled.md';
import LoadingMd from './markdown/loading.md';
import SizeMd from './markdown/size.md';
import TextMd from './markdown/text.md';
import Basic from './Basic';
import Disabled from './Disabled';
import Loading from './Loading';
import Size from './Size';
import Text from './Text';

export class SwitchComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={TextMd}><Text /></DemoCard>
						<DemoCard code={LoadingMd}><Loading /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={DisabledMd}><Disabled /></DemoCard>
						<DemoCard code={SizeMd}><Size /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default SwitchComponent;
