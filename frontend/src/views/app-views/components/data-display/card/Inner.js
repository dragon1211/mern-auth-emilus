/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Card } from "antd";

export class Inner extends Component {
  render() {
    return (
      <Card title="Card title">
        <p
          style={{
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.85)",
            marginBottom: 16,
            fontWeight: 500
          }}
        >
          Group title
        </p>
        <Card
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>
      </Card>
    );
  }
}

export default Inner;
