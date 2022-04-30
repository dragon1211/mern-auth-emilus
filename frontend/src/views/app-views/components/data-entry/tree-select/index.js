import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AsyncMd from './markdown/async.md';
import CheckableMd from './markdown/checkable.md';
import MultipleMd from './markdown/multiple.md';
import TreeDataMd from './markdown/treeData.md';
import Basic from './Basic';
import Async from './Async';
import Checkable from './Checkable';
import Multiple from './Multiple';
import TreeData from './TreeData';

export class TreeSelectComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={TreeDataMd}><TreeData /></DemoCard>
						<DemoCard code={AsyncMd}><Async /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={MultipleMd}><Multiple /></DemoCard>
						<DemoCard code={CheckableMd}><Checkable /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default TreeSelectComponent;
