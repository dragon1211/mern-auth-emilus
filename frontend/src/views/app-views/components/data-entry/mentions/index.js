import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AsyncMd from './markdown/async.md';
import FormMd from './markdown/form.md';
import PlacementMd from './markdown/placement.md';
import PrefixMd from './markdown/prefix.md';
import ReadonlyMd from './markdown/readonly.md';
import Basic from './Basic';
import Async from './Async';
import Form from './Form';
import Placement from './Placement';
import Prefix from './Prefix';
import Readonly from './Readonly';

export class MentionsComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={FormMd}><Form /></DemoCard>
						<DemoCard code={ReadonlyMd}><Readonly /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={AsyncMd}><Async /></DemoCard>
						<DemoCard code={PrefixMd}><Prefix /></DemoCard>
						<DemoCard code={PlacementMd}><Placement /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default MentionsComponent;
