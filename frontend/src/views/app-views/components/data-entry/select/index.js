import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import BigDataMd from './markdown/big-data.md';
import BorderedMd from './markdown/bordered.md';
import AutomaticTokenizationMd from './markdown/automatic-tokenization.md';
import CoordinateMd from './markdown/coordinate.md';
import CustomDropdownMenuMd from './markdown/custom-dropdown-menu.md';
import CustomTagRenderMd from './markdown/custom-tag-render.md';
import HideSelectedMd from './markdown/hide-selected.md';
import LabelInValueMd from './markdown/label-in-value.md';
import MultipleMd from './markdown/multiple.md';
import OptgroupMd from './markdown/optgroup.md';
import OptionLabelPropMd from './markdown/option-label-prop.md';
import SearchBoxMd from './markdown/search-box.md';
import SearchMd from './markdown/search.md';
import SelectUsersMd from './markdown/select-users.md';
import SizeMd from './markdown/size.md';
import TagsMd from './markdown/tags.md';

import Basic from './Basic';
import BigData from './BigData';
import Bordered from './Bordered';
import AutomaticTokenization from './AutomaticTokenization';
import Coordinate from './Coordinate';
import CustomDropdownMenu from './CustomDropdownMenu';
import CustomTagRender from './CustomTagRender';
import HideSelected from './HideSelected';
import LabelInValue from './LabelInValue';
import Multiple from './Multiple';
import Optgroup from './Optgroup';
import OptionLabelProp from './OptionLabelProp';
import SearchBox from './SearchBox';
import Search from './Search';
import SelectUsers from './SelectUsers';
import Size from './Size';
import Tags from './Tags';

export class SelectComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={MultipleMd}><Multiple /></DemoCard>
						<DemoCard code={OptionLabelPropMd}><OptionLabelProp /></DemoCard>
						<DemoCard code={OptgroupMd}><Optgroup /></DemoCard>
						<DemoCard code={SearchBoxMd}><SearchBox /></DemoCard>
						<DemoCard code={AutomaticTokenizationMd}><AutomaticTokenization /></DemoCard>
						<DemoCard code={CustomDropdownMenuMd}><CustomDropdownMenu /></DemoCard>
						<DemoCard code={BigDataMd}><BigData /></DemoCard>
						<DemoCard code={CustomTagRenderMd}><CustomTagRender /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={SearchMd}><Search /></DemoCard>
						<DemoCard code={SizeMd}><Size /></DemoCard>
						<DemoCard code={TagsMd}><Tags /></DemoCard>
						<DemoCard code={CoordinateMd}><Coordinate /></DemoCard>
						<DemoCard code={LabelInValueMd}><LabelInValue /></DemoCard>
						<DemoCard code={SelectUsersMd}><SelectUsers /></DemoCard>
						<DemoCard code={HideSelectedMd}><HideSelected /></DemoCard>
						<DemoCard code={BorderedMd}><Bordered /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default SelectComponent;
