import React from "react";
import { Row, Col } from "antd";

class ResponsiveMore extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
      </Row>
    );
  }
}

export default ResponsiveMore;
