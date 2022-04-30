import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AccordionMd from './markdown/accordion.md';
import BorderlessMd from './markdown/borderless.md';
import CustomMd from './markdown/custom.md';
import ExtraMd from './markdown/extra.md';
import MixMd from './markdown/mix.md';
import NoarrowMd from './markdown/noarrow.md';

import Basic from './Basic';
import Accordion from './Accordion';
import Borderless from './Borderless';
import Custom from './Custom';
import Extra from './Extra';
import Mix from './Mix';
import Noarrow from './Noarrow';
 
export class CollapseComponent extends Component {
  render() {
    return (
			<React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={AccordionMd}><Accordion /></DemoCard>
				<DemoCard code={MixMd}><Mix /></DemoCard>
				<DemoCard code={BorderlessMd}><Borderless /></DemoCard>
				<DemoCard code={CustomMd}><Custom /></DemoCard>
				<DemoCard code={NoarrowMd}><Noarrow /></DemoCard>
				<DemoCard code={ExtraMd}><Extra /></DemoCard>
				<ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default CollapseComponent;
