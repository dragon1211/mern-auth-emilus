import React, { Component } from "react";
import { Progress } from "antd";

export class Format extends Component {
  render() {
    return (
      <div>
        <Progress
          type="circle"
          percent={75}
          className="mr-2"
          format={percent => `${percent} Days`}
        />
        <Progress type="circle" percent={100} format={() => "Done"} />
      </div>
    );
  }
}

export default Format;
