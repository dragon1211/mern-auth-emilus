import React, { useState, Component } from 'react';
import { Tree } from 'antd';

const initTreeDate = [
  {
    title: 'Expand to load',
    key: '0',
  },
  {
    title: 'Expand to load',
    key: '1',
  },
  {
    title: 'Tree Node',
    key: '2',
    isLeaf: true,
  },
];

const Demo = () => {
  const [treeData, setTreeData] = useState(initTreeDate);

  function onLoadData({ props: { data } }) {
    return new Promise(resolve => {
      if (data.children) {
        resolve();
        return;
      }

      setTimeout(() => {
        data.children = [
          {
            title: 'Child Node',
            key: `${data.key}-0`,
          },
          {
            title: 'Child Node',
            key: `${data.key}-1`,
          },
        ];
        setTreeData([...treeData]);
        resolve();
      }, 1000);
    });
  }

  return <Tree loadData={onLoadData} treeData={treeData} />;
};


export class Dynamic extends Component {

  render() {
    return (
      <Demo />
    );
  }
}

export default Dynamic;
