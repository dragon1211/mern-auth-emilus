import React from "react";
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;

class StepsIcon extends React.Component {
  render() {
    return (
      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>
    );
  }
}

export default StepsIcon;
