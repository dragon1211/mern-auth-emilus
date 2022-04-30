import React, { Component } from "react";
import DemoCard from "components/util-components/DemoCard";
import ApiContainer from "components/util-components/ApiContainer";
import BasicMd from './markdown/basic.md';
import EllipsisMd from './markdown/ellipsis.md'; 
import InteractiveMd from './markdown/interactive.md';
import SuffixMd from './markdown/suffix.md';
import TextMd from './markdown/text.md';
import TitleMd from './markdown/title.md';
import IndexMd from './markdown/index.en-US.md';
import Basic from './Basic';
import Ellipsis from './Ellipsis';
import Interactive from './Interactive';
import Suffix from './Suffix';
import Text from './Text';
import Title from './Title';

export class TypographyComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <DemoCard code={BasicMd}><Basic /></DemoCard>
        <DemoCard code={TitleMd}><Title /></DemoCard>
        <DemoCard code={TextMd}><Text /></DemoCard>
        <DemoCard code={InteractiveMd}><Interactive /></DemoCard>
        <DemoCard code={EllipsisMd}><Ellipsis /></DemoCard>
        <DemoCard code={SuffixMd}><Suffix /></DemoCard>
        <ApiContainer code={IndexMd}/>
      </React.Fragment>
    );
  }
}

export default TypographyComponent;
