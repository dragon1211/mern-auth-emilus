import React, { Component, useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';

function VirtualTable(props) {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const widthColumnCount = columns.filter(({ width }) => !width).length;
  const mergedColumns = columns.map((column) => {
    if (column.width) {
      return column;
    }

    return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
  });
  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft,
          });
        }
      },
    });
    return obj;
  });

  const resetVirtualGrid = () => {
    if(gridRef.current) {
      gridRef.current.resetAfterIndices({
        columnIndex: 0,
        shouldForceUpdate: false,
      });
    }
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div
            className={classNames('virtual-table-cell', {
              'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
            })}
            style={style}
          >
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
          </div>
        )}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
} // Usage

const columns = [
  {
    title: 'A',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'B',
    dataIndex: 'key',
  },
  {
    title: 'C',
    dataIndex: 'key',
  },
  {
    title: 'D',
    dataIndex: 'key',
  },
  {
    title: 'E',
    dataIndex: 'key',
    width: 200,
  },
  {
    title: 'F',
    dataIndex: 'key',
    width: 100,
  },
];
const data = Array.from(
  {
    length: 100000,
  },
  (_, key) => ({
    key,
  }),
);

export class VirtualList extends Component {
	render() {
		return (
			<VirtualTable
        columns={columns}
        dataSource={data}
        scroll={{
          y: 300,
          x: '100vw',
        }}
      />
		)
	}
}

export default VirtualList
