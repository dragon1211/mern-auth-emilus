/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Card } from "antd";

export class Basic extends Component {
  render() {
    return (
      <div>
        <Card
          title="Default size card"
          extra={<a href="/#">More</a>}
          style={{ width: 300, marginBottom: 30 }}
        >
          <p className="mb-0">Card content</p>
          <p className="mb-0">Card content</p>
          <p className="mb-0">Card content</p>
        </Card>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="/#">More</a>}
          style={{ width: 300 }}
        >
          <p className="mb-0">Card content</p>
          <p className="mb-0">Card content</p>
          <p className="mb-0">Card content</p>
        </Card>
      </div>
    );
  }
}

export default Basic;
