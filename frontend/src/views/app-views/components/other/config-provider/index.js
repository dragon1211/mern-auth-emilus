import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import LocaleMd from './markdown/locale.md';
import DirectionMd from './markdown/direction.md';
import SizeMd from './markdown/size.md';
import Locale from './Locale';
import Direction from './Direction';
import Size from './Size';

export class ConfigProviderComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <DemoCard code={LocaleMd}><Locale /></DemoCard>
        <DemoCard code={DirectionMd}><Direction /></DemoCard>
        <DemoCard code={SizeMd}><Size /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default ConfigProviderComponent;
