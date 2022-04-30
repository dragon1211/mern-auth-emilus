import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import BadgeMd from './markdown/badge.md';
import DynamicMd from './markdown/dynamic.md';
import TypeMd from './markdown/type.md';
import Basic from './Basic';
import Badge from './Badge';
import Dynamic from './Dynamic';
import Type from './Type';

export class AvatarComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={DynamicMd}><Dynamic /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={TypeMd}><Type /></DemoCard>
						<DemoCard code={BadgeMd}><Badge /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default AvatarComponent;
