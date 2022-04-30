import React from "react";
import { Pagination } from "antd";

class More extends React.Component {
  render() {
    return <Pagination defaultCurrent={6} total={500} />;
  }
}

export default More;
