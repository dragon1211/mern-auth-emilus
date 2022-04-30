import React from "react";
import { Pagination } from "antd";

function onChange(pageNumber) {
  console.log("Page: ", pageNumber);
}

class Jump extends React.Component {
  render() {
    return (
      <div>
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
        />
        <br />
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
          disabled
        />
      </div>
    );
  }
}

export default Jump;
