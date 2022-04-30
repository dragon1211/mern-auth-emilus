import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CharacterMd from './markdown/character.md';
import ClearMd from './markdown/clear.md';
import DisabledMd from './markdown/disabled.md';
import HalfMd from './markdown/half.md';
import TextMd from './markdown/text.md';
import Basic from './Basic';
import Character from './Character';
import Clear from './Clear';
import Disabled from './Disabled';
import Half from './Half';
import Text from './Text';

export class RateComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={TextMd}><Text /></DemoCard>
						<DemoCard code={ClearMd}><Clear /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={HalfMd}><Half /></DemoCard>
						<DemoCard code={DisabledMd}><Disabled /></DemoCard>
						<DemoCard code={CharacterMd}><Character /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default RateComponent;
