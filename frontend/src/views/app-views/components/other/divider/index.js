import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import HorizontalMd from './markdown/horizontal.md';
import VerticalMd from './markdown/vertical.md';
import WithTextMd from './markdown/with-text.md';
import Horizontal from './Horizontal';
import Vertical from './Vertical';
import WithText from './WithText';

export class DividerComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <DemoCard code={HorizontalMd}><Horizontal /></DemoCard>
        <DemoCard code={WithTextMd}><WithText /></DemoCard>
        <DemoCard code={VerticalMd}><Vertical /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default DividerComponent;
