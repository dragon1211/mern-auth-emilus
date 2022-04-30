import React, { Component } from "react";
import { Slider, Row, Col } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

class IconSlider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColorCls = value >= mid ? '' : 'text-primary';
    const nextColorCls = value >= mid ? 'text-primary' : '';
    return (
      <div className="icon-wrapper">
        <Row gutter="16">
          <Col span={2}>
            <FrownOutlined className={`${preColorCls} mt-2 ml-3 text-right`} />
          </Col>
          <Col span={20}>
            <Slider {...this.props} onChange={this.handleChange} value={value} />
          </Col>
          <Col span={2}>
            <SmileOutlined className={`${nextColorCls} mt-2`} />
          </Col>
        </Row>
      </div>
    );
  }
}

export class SliderIconSlider extends Component {
  render() {
    return <IconSlider min={0} max={20} />;
  }
}

export default SliderIconSlider;
