import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ChangeOnSelectMd from './markdown/change-on-select.md';
import CustomRenderMd from './markdown/custom-render.md';
import CustomTriggerMd from './markdown/custom-trigger.md';
import DefaultValueMd from './markdown/default-value.md';
import DisabledOptionMd from './markdown/disabled-option.md';
import FieldsNameMd from './markdown/fields-name.md';
import HoverMd from './markdown/hover.md';
import LazyMd from './markdown/lazy.md';
import SearchMd from './markdown/search.md';
import SizeMd from './markdown/size.md';
import SuffixMd from './markdown/suffix.md';

import Basic from './Basic';
import ChangeOnSelect from './ChangeOnSelect';
import CustomRender from './CustomRender';
import CustomTrigger from './CustomTrigger';
import DefaultValue from './DefaultValue';
import DisabledOption from './DisabledOption';
import FieldsName from './FieldsName';
import Hover from './Hover';
import Lazy from './Lazy';
import Search from './Search';
import Size from './Size';
import Suffix from './Suffix';

export class CascaderComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Row gutter={16} type="flex">
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={CustomTriggerMd}><CustomTrigger /></DemoCard>
						<DemoCard code={DisabledOptionMd}><DisabledOption /></DemoCard>
						<DemoCard code={SizeMd}><Size /></DemoCard>
						<DemoCard code={SearchMd}><Search /></DemoCard>
						<DemoCard code={FieldsNameMd}><FieldsName /></DemoCard>
          </Col>
          <Col sm={24} md={24} lg={12}>
						<DemoCard code={DefaultValueMd}><DefaultValue /></DemoCard>
						<DemoCard code={HoverMd}><Hover /></DemoCard>
						<DemoCard code={ChangeOnSelectMd}><ChangeOnSelect /></DemoCard>
						<DemoCard code={CustomRenderMd}><CustomRender /></DemoCard>
						<DemoCard code={LazyMd}><Lazy /></DemoCard>
						<DemoCard code={SuffixMd}><Suffix /></DemoCard>
          </Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default CascaderComponent;
