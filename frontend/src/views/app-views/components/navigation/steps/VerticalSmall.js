import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

class VerticalSmall extends React.Component {
  render() {
    return (
      <Steps direction="vertical" size="small" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    );
  }
}

export default VerticalSmall;
