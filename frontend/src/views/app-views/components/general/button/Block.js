import React from "react";
import { Button } from "antd";

class Block extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" block>
          Primary
        </Button>
        <Button block>Default</Button>
        <Button type="dashed" block>
          Dashed
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </div>
    );
  }
}

export default Block;
