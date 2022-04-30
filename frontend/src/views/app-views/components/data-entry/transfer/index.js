import React, { Component } from "react";
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AdvancedMd from './markdown/advanced.md';
import CustomItemMd from './markdown/custom-item.md';
import SearchMd from './markdown/search.md';
import TableTransferMd from './markdown/table-transfer.md';
import TreeTransferMd from './markdown/tree-transfer.md';
import Basic from './Basic';
import Advanced from './Advanced';
import CustomItem from './CustomItem';
import Search from './Search';
import TableTransfer from './TableTransfer';
import TreeTransfer from './TreeTransfer';

export class TransferComponent extends Component {
  render() {
    return (
			<React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={SearchMd}><Search /></DemoCard>
				<DemoCard code={AdvancedMd}><Advanced /></DemoCard>
				<DemoCard code={CustomItemMd}><CustomItem /></DemoCard>
				<DemoCard code={TableTransferMd}><TableTransfer /></DemoCard>
				<DemoCard code={TreeTransferMd}><TreeTransfer /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default TransferComponent;
