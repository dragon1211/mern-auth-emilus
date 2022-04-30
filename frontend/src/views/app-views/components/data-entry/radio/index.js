import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import DisableMd from './markdown/disable.md';
import RadiobuttonSolidMd from './markdown/radiobutton-solid.md';
import RadiobuttonMd from './markdown/radiobutton.md';
import RadiogroupMoreMd from './markdown/radiogroup-more.md';
import RadiogroupOptionsMd from './markdown/radiogroup-options.md';
import RadiogroupWithNameMd from './markdown/radiogroup-with-name.md';
import RadiogroupMd from './markdown/radiogroup.md';
import SizeMd from './markdown/size.md';
import Basic from './Basic';
import Disable from './Disable';
import RadiobuttonSolid from './RadiobuttonSolid';
import Radiobutton from './Radiobutton';
import RadiogroupMore from './RadiogroupMore';
import RadiogroupOptions from './RadiogroupOptions';
import RadiogroupWithName from './RadiogroupWithName';
import Radiogroup from './Radiogroup';
import Size from './Size';

export class RadioComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={RadiogroupMd}><Radiogroup /></DemoCard>
						<DemoCard code={RadiogroupOptionsMd}><RadiogroupOptions /></DemoCard>
						<DemoCard code={RadiogroupWithNameMd}><RadiogroupWithName /></DemoCard>
						<DemoCard code={RadiobuttonSolidMd}><RadiobuttonSolid /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={DisableMd}><Disable /></DemoCard>
						<DemoCard code={RadiogroupMoreMd}><RadiogroupMore /></DemoCard>
						<DemoCard code={RadiobuttonMd}><Radiobutton /></DemoCard>
						<DemoCard code={SizeMd}><Size /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default RadioComponent;
