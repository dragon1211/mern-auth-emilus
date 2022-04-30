import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CertainCategoryMd from './markdown/certain-category.md';
import CustomMd from './markdown/custom.md';
import NonCaseSensitiveMd from './markdown/non-case-sensitive.md';
import OptionMd from './markdown/options.md';
import UncertainCategoryMd from './markdown/uncertain-category.md';
import Basic from './Basic';
import CertainCategory from './CertainCategory';
import Custom from './Custom';
import NonCaseSensitive from './NonCaseSensitive';
import Option from './Option';
import UncertainCategory from './UncertainCategory';


export class AutoCompleteComponent extends Component {
  render() {
    return (
      <React.Fragment>
				<Row gutter={16} type="flex" >
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={CustomMd}><Custom /></DemoCard>
						<div className="code-box-autocomplete-demo">
							<DemoCard code={CertainCategoryMd}><CertainCategory /></DemoCard>
						</div>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={OptionMd}><Option /></DemoCard>
						<DemoCard code={NonCaseSensitiveMd}><NonCaseSensitive /></DemoCard>
						<DemoCard code={UncertainCategoryMd}><UncertainCategory /></DemoCard>
					</Col>
				</Row>
				<ApiContainer code={IndexMd}/>
			</React.Fragment>
    );
  }
}

export default AutoCompleteComponent;
