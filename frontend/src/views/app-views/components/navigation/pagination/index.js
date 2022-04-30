import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ChangerMd from './markdown/changer.md';
import ControlledMd from './markdown/controlled.md';
import ItemRenderMd from './markdown/itemRender.md';
import JumpMd from './markdown/jump.md';
import MiniMd from './markdown/mini.md';
import MoreMd from './markdown/more.md';
import SimpleMd from './markdown/simple.md';
import TotalMd from './markdown/total.md';
import Basic from './Basic';
import Changer from './Changer';
import Controlled from './Controlled';
import ItemRender from './ItemRender';
import Jump from './Jump';
import Mini from './Mini';
import More from './More';
import Simple from './Simple';
import Total from './Total';

export class PaginationComponent extends Component {
  render() {
    return (
			<React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={MoreMd}><More /></DemoCard>
				<DemoCard code={ChangerMd}><Changer /></DemoCard>
				<DemoCard code={JumpMd}><Jump /></DemoCard>
				<div className="code-box-pagination-demo">
					<DemoCard code={MiniMd}><Mini /></DemoCard>
				</div>
				<DemoCard code={SimpleMd}><Simple /></DemoCard>
				<DemoCard code={ControlledMd}><Controlled /></DemoCard>
				<DemoCard code={TotalMd}><Total /></DemoCard>
				<DemoCard code={ItemRenderMd}><ItemRender /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default PaginationComponent;
