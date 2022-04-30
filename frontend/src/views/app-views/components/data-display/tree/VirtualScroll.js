import React, { Component } from 'react'
import { Tree } from 'antd';

function dig(path = '0', level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

export class VirtualScroll extends Component {
	render() {
		return (
			<Tree treeData={treeData} height={233} defaultExpandAll />
		)
	}
}

export default VirtualScroll
