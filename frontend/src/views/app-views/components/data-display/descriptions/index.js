import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import BorderMd from './markdown/border.md';
import ResponsiveMd from './markdown/responsive.md';
import SizeMd from './markdown/size.md';
import VerticalBorderMd from './markdown/vertical-border.md';
import VerticalMd from './markdown/vertical.md';
import Basic from './Basic';
import Border from './Border';
import Responsive from './Responsive';
import Size from './Size';
import VerticalBorder from './VerticalBorder';
import Vertical from './Vertical';

export class DescriptionComponent extends Component {
  render() {
    return (
      <React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={BorderMd}><Border /></DemoCard>
				<DemoCard code={SizeMd}><Size /></DemoCard>
				<DemoCard code={ResponsiveMd}><Responsive /></DemoCard>
				<DemoCard code={VerticalMd}><Vertical /></DemoCard>
				<DemoCard code={VerticalBorderMd}><VerticalBorder /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default DescriptionComponent;
