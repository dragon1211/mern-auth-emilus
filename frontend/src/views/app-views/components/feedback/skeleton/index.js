import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import ActiveMd from './markdown/active.md';
import ChildrenMd from './markdown/children.md';
import ComplexMd from './markdown/complex.md';
import ElementMd from './markdown/element.md';
import ListMd from './markdown/list.md';
import Basic from './Basic';
import Active from './Active';
import Children from './Children';
import Complex from './Complex';
import Element from './Element';
import List from './List';

export class SkeletonComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <DemoCard code={BasicMd}><Basic /></DemoCard>
        <DemoCard code={ComplexMd}><Complex /></DemoCard>
        <DemoCard code={ActiveMd}><Active /></DemoCard>
        <DemoCard code={ElementMd}><Element /></DemoCard>
        <DemoCard code={ChildrenMd}><Children /></DemoCard>
        <DemoCard code={ListMd}><List /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default SkeletonComponent;
