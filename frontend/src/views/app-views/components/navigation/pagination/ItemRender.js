/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Pagination } from "antd";

function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
}

class ItemRender extends React.Component {
  render() {
    return <Pagination total={500} itemRender={itemRender} />;
  }
}

export default ItemRender;
