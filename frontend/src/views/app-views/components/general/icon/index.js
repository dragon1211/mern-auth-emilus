import React, { Component } from "react";
import IconDisplay from './IconDisplay';
import DemoCard from "components/util-components/DemoCard";
import ApiContainer from "components/util-components/ApiContainer";
import { Row, Col, Card } from 'antd';
import indexMd from './markdown/index.md';
import basicMd from './markdown/basic.md';
import customMd from './markdown/custom.md';
import twoToneMd from './markdown/two-tone.md';
import iconFontsMd from './markdown/iconfont.md';
import Basic from './Basic';
import Custom from './Custom';
import TwoTone from './TwoTone';
import IconFonts from './IconFonts';

export class ButtonComponent extends Component {

  render() {
    return (
      <div>
				<Card>
					<IconDisplay />
				</Card>
        <Row gutter={16} type="flex" >
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={basicMd}><Basic /></DemoCard>
						<DemoCard code={customMd}><Custom /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <DemoCard code={twoToneMd}><TwoTone /></DemoCard>
						<DemoCard code={iconFontsMd}><IconFonts /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={indexMd}/>
      </div>
    );
  }
}

export default ButtonComponent;
