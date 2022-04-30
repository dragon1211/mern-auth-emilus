import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import EditorMd from './markdown/editor.md';
import ListMd from './markdown/list.md';
import NestedMd from './markdown/nested.md';
import Basic from './Basic';
import Editor from './Editor';
import List from './List';
import Nested from './Nested';

export class CommentComponent extends Component {
  render() {
    return (
      <React.Fragment>
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<DemoCard code={ListMd}><List /></DemoCard>
				<DemoCard code={EditorMd}><Editor /></DemoCard>
				<DemoCard code={NestedMd}><Nested /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default CommentComponent;
