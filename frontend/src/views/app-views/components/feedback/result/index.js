import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import Result403Md from './markdown/403.md';
import Result404Md from './markdown/404.md';
import Result500Md from './markdown/500.md';
import CustomIconMd from './markdown/customIcon.md';
import ErrorMd from './markdown/error.md';
import InfoMd from './markdown/info.md';
import SuccessMd from './markdown/success.md';
import WarningMd from './markdown/warning.md';
import Result403 from './Result403';
import Result404 from './Result404';
import Result500 from './Result500';
import CustomIcon from './CustomIcon';
import Error from './Error';
import Info from './Info';
import Success from './Success';
import Warning from './Warning';

export class ResultComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <DemoCard code={SuccessMd}><Success /></DemoCard>
        <DemoCard code={InfoMd}><Info /></DemoCard>
        <DemoCard code={WarningMd}><Warning /></DemoCard>
        <DemoCard code={Result403Md}><Result403 /></DemoCard>
        <DemoCard code={Result404Md}><Result404 /></DemoCard>
        <DemoCard code={Result500Md}><Result500 /></DemoCard>
        <DemoCard code={ErrorMd}><Error /></DemoCard>
        <DemoCard code={CustomIconMd}><CustomIcon /></DemoCard>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
    );
  }
}

export default ResultComponent;
