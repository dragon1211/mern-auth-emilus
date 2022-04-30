import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import DigitMd from './markdown/digit.md';
import DisabledMd from './markdown/disabled.md';
import FormatterMd from './markdown/formatter.md';
import SizeMd from './markdown/size.md';
import Basic from './Basic';
import Digit from './Digit';
import Disabled from './Disabled';
import Formatter from './Formatter';
import Size from './Size';

export class InputNumberComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={DisabledMd}><Disabled /></DemoCard>
						<DemoCard code={FormatterMd}><Formatter /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={SizeMd}><Size /></DemoCard>
						<DemoCard code={DigitMd}><Digit /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default InputNumberComponent;
