import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import HorizontalMd from './markdown/horizontal.md';
import InlineCollapsedMd from './markdown/inline-collapsed.md';
import InlineMd from './markdown/inline.md';
import SideCurrentMd from './markdown/sider-current.md';
import SwitchModeMd from './markdown/switch-mode.md';
import ThemeMd from './markdown/theme.md';
import VerticalMd from './markdown/vertical.md';
import Horizontal from './Horizontal';
import InlineCollapsed from './InlineCollapsed';
import Inline from './Inline';
import SideCurrent from './SideCurrent';
import SwitchMode from './SwitchMode';
import Theme from './Theme';
import Vertical from './Vertical';

export class MenuComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <DemoCard code={HorizontalMd}><Horizontal /></DemoCard>
        <DemoCard code={InlineMd}><Inline /></DemoCard>
        <DemoCard code={InlineCollapsedMd}><InlineCollapsed /></DemoCard>
        <DemoCard code={SideCurrentMd}><SideCurrent /></DemoCard>
        <DemoCard code={VerticalMd}><Vertical /></DemoCard>
        <DemoCard code={ThemeMd}><Theme /></DemoCard>
        <DemoCard code={SwitchModeMd}><SwitchMode /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default MenuComponent;
