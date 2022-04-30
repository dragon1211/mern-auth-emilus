import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import DemoFrame from 'components/util-components/DemoFrame';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ActionMd from './markdown/actions.md';
import BreadcrumbMd from './markdown/breadcrumb.md';
import ContentMd from './markdown/content.md';
import GhostMd from './markdown/ghost.md';
import ResponsiveMd from './markdown/responsive.md';
import Basic from './Basic';
import Action from './Action';
import Breadcrumb from './Breadcrumb';
import Content from './Content';
import Ghost from './Ghost';
import Responsive from './Responsive';

export class PageHeaderComponent extends Component {
  render() {
    return (
			<React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={GhostMd}><Ghost /></DemoCard>
				<DemoCard code={BreadcrumbMd}><Breadcrumb /></DemoCard>
				<DemoCard code={ContentMd}><Content /></DemoCard>
				<DemoCard code={ActionMd}><Action /></DemoCard>
				<DemoCard code={ResponsiveMd}><DemoFrame height="300px" className="code-box-pageheader-demo"><Responsive /></DemoFrame></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default PageHeaderComponent;
