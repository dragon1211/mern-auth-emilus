import React from "react";
import { Row, Col, Divider } from 'antd';

class Flex extends React.Component {
  render() {
    return (
      <div>
        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          sub-element align left
        </Divider>
        <Row justify="start" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          sub-element align center
        </Divider>
        <Row justify="center" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          sub-element align right
        </Divider>
        <Row justify="end" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          sub-element monospaced arrangement
        </Divider>
        <Row justify="space-between" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          sub-element align full
        </Divider>
        <Row justify="space-around" style={{backgroundColor: 'rgba(128, 128, 128, 0.08)'}}>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </div>
    );
  }
}

export default Flex;
