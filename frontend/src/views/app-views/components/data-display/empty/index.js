import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ConfigProviderMd from './markdown/config-provider.md';
import CustomizeMd from './markdown/customize.md';
import DescriptionMd from './markdown/description.md';
import SimpleMd from './markdown/simple.md';
import Basic from './Basic';
import ConfigProvider from './ConfigProvider';
import Customize from './Customize';
import Description from './Description';
import Simple from './Simple';
 
export class EmptyComponent extends Component {
  render() {
    return (
			<React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={SimpleMd}><Simple /></DemoCard>
				<DemoCard code={CustomizeMd}><Customize /></DemoCard>
				<DemoCard code={ConfigProviderMd}><ConfigProvider /></DemoCard>
				<DemoCard code={DescriptionMd}><Description /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default EmptyComponent;
