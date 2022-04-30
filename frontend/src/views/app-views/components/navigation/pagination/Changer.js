import React from "react";
import { Pagination } from "antd";

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

class Changer extends React.Component {
  render() {
    return (
      <div>
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
        <br />
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
          disabled
        />
      </div>
    );
  }
}

export default Changer;
