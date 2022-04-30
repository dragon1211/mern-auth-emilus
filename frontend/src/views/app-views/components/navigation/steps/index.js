import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import ClickableMd from './markdown/clickable.md';
import CustomizedProgressDotMd from './markdown/customized-progress-dot.md';
import ErrorMd from './markdown/error.md';
import IconMd from './markdown/icon.md';
import NavMd from './markdown/nav.md';
import ProgressDotMd from './markdown/progress-dot.md';
import SimpleMd from './markdown/simple.md';
import SmallSizeMd from './markdown/small-size.md';
import StepNextMd from './markdown/step-next.md';
import VerticalSmallMd from './markdown/vertical-small.md';
import VerticalMd from './markdown/vertical.md';
import Clickable from './Clickable';
import CustomizedProgressDot from './CustomizedProgressDot';
import Error from './Error';
import Icon from './Icon'
import Nav from './Nav';
import ProgressDot from './ProgressDot';
import Simple from './Simple';
import SmallSize from './SmallSize';
import StepNext from './StepNext';
import VerticalSmall from './VerticalSmall';
import Vertical from './Vertical';

export class StepsComponent extends Component {
  render() {
    return (
			<React.Fragment>
				<DemoCard code={SimpleMd}><Simple /></DemoCard>
				<DemoCard code={SmallSizeMd}><SmallSize /></DemoCard>
				<DemoCard code={IconMd}><Icon /></DemoCard>
				<DemoCard code={StepNextMd}><StepNext /></DemoCard>
				<DemoCard code={VerticalMd}><Vertical /></DemoCard>
				<DemoCard code={VerticalSmallMd}><VerticalSmall /></DemoCard>
				<DemoCard code={ErrorMd}><Error /></DemoCard>
				<DemoCard code={ProgressDotMd}><ProgressDot /></DemoCard>
				<DemoCard code={CustomizedProgressDotMd}><CustomizedProgressDot /></DemoCard>
				<DemoCard code={ClickableMd}><Clickable /></DemoCard>
				<DemoCard code={NavMd}><Nav /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default StepsComponent;
