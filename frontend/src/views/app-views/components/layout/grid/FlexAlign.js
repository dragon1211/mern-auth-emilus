import React from "react";
import { Row, Col, Divider } from 'antd';

const DemoBox = props => <span className={`height-${props.value}`}>{props.children}</span>;

class FlexAlign extends React.Component {
  render() {
    return (
      <div>
        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          Align Top
        </Divider>
        <Row justify="center" align="top" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          Align Middle
        </Divider>
        <Row justify="space-around" align="middle" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          Align Bottom
        </Divider>
        <Row justify="space-between" align="bottom" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FlexAlign;
