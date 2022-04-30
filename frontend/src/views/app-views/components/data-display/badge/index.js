import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ChangeMd from './markdown/change.md';
import ColorfulMd from './markdown/colorful.md';
import DotMd from './markdown/dot.md';
import LinkMd from './markdown/link.md';
import NoWrapperMd from './markdown/no-wrapper.md'; 
import OverflowMd from './markdown/overflow.md';
import StatusMd from './markdown/status.md';
import TitleMd from './markdown/title.md';
import Basic from './Basic';
import Change from './Change';
import Colorful from './Colorful';
import Dot from './Dot';
import Link from './Link';
import NoWrapper from './NoWrapper'; 
import Overflow from './Overflow';
import Status from './Status';
import Title from './Title';
 
export class BadgeComponent extends Component {
  render() {
    return (
      <div className="code-box-avatar-demo">
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={OverflowMd}><Overflow /></DemoCard>
						<DemoCard code={LinkMd}><Link /></DemoCard>
						<DemoCard code={StatusMd}><Status /></DemoCard>
						<DemoCard code={TitleMd}><Title /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={NoWrapperMd}><NoWrapper /></DemoCard>
						<DemoCard code={DotMd}><Dot /></DemoCard>
						<DemoCard code={ChangeMd}><Change /></DemoCard>
						<DemoCard code={ColorfulMd}><Colorful /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </div>
    );
  }
}

export default BadgeComponent;
