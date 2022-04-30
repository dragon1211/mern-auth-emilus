import React, { useState } from 'react';
import { Affix, Button } from "antd";

const Demo = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};
class Target extends React.Component {
  render() {
    return (
      <Demo />
    );
  }
}

export default Target;
