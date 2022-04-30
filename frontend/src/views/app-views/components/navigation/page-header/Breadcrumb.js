import React from "react";
import { PageHeader } from "antd";

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu"
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu"
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu"
  }
];

class Breadcrumb extends React.Component {
  render() {
    return (
      <PageHeader
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        title="Title"
        breadcrumb={{ routes }}
        subTitle="This is a subtitle"
      />
    );
  }
}

export default Breadcrumb;
