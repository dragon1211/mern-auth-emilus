import React from "react";
import { Pagination } from "antd";

class Basic extends React.Component {
  render() {
    return <Pagination defaultCurrent={1} total={50} />;
  }
}

export default Basic;
