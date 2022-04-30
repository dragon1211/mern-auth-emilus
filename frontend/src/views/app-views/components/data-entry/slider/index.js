import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import EventMd from './markdown/event.md';
import IconSliderMd from './markdown/icon-slider.md';
import InputNumberMd from './markdown/input-number.md';
import MarkMd from './markdown/mark.md';
import ReverseMd from './markdown/reverse.md';
import ShowTooltipMd from './markdown/show-tooltip.md';
import TipFormatterMd from './markdown/tip-formatter.md';
import VerticalMd from './markdown/vertical.md';
import Basic from './Basic';
import Event from './Event';
import IconSlider from './IconSlider';
import InputNumber from './InputNumber';
import Mark from './Mark';
import Reverse from './Reverse';
import ShowTooltip from './ShowTooltip';
import TipFormatter from './TipFormatter';
import Vertical from './Vertical';

export class SliderComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={IconSliderMd}><IconSlider /></DemoCard>
						<DemoCard code={EventMd}><Event /></DemoCard>
						<DemoCard code={VerticalMd}><Vertical /></DemoCard>
						<DemoCard code={ReverseMd}><Reverse /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={InputNumberMd}><InputNumber /></DemoCard>
						<DemoCard code={TipFormatterMd}><TipFormatter /></DemoCard>
						<DemoCard code={MarkMd}><Mark /></DemoCard>
						<DemoCard code={ShowTooltipMd}><ShowTooltip /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default SliderComponent;
