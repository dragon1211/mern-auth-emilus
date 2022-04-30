import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import BorderLessMd from './markdown/border-less.md';
import FlexibleContentMd from './markdown/flexible-content.md';
import GridCardMd from './markdown/grid-card.md';
import InColumnMd from './markdown/in-column.md';
import InnerMd from './markdown/inner.md';
import LoadingMd from './markdown/loading.md';
import MetaMd from './markdown/meta.md';
import SimpleMd from './markdown/simple.md';
import TabsMd from './markdown/tabs.md';
import Basic from './Basic';
import BorderLess from './BorderLess';
import FlexibleContent from './FlexibleContent';
import GridCard from './GridCard';
import InColumn from './InColumn';
import Inner from './Inner';
import Loading from './Loading';
import Meta from './Meta';
import Simple from './Simple';
import Tabs from './Tabs';

export class CardComponent extends Component {
  render() {
    return (
      <React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={BorderLessMd}><BorderLess /></DemoCard>
				<DemoCard code={SimpleMd}><Simple /></DemoCard>
				<DemoCard code={FlexibleContentMd}><FlexibleContent /></DemoCard>
				<DemoCard code={InColumnMd}><InColumn /></DemoCard>
				<DemoCard code={LoadingMd}><Loading /></DemoCard>
				<DemoCard code={GridCardMd}><GridCard /></DemoCard>
				<DemoCard code={InnerMd}><Inner /></DemoCard>
				<DemoCard code={TabsMd}><Tabs /></DemoCard>
				<DemoCard code={MetaMd}><Meta /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default CardComponent;
