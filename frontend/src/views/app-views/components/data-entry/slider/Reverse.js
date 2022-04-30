import React, { Component } from "react";
import { Slider, Switch } from "antd";

export class Reverse extends Component {
  state = {
    reverse: true
  };

  handleReverseChange = reverse => {
    this.setState({ reverse });
  };

  render() {
    const { reverse } = this.state;
    return (
      <div>
        <Slider defaultValue={30} reverse={reverse} />
        <Slider range defaultValue={[20, 50]} reverse={reverse} />
        Reversed:{" "}
        <Switch
          size="small"
          checked={reverse}
          onChange={this.handleReverseChange}
        />
      </div>
    );
  }
}

export default Reverse;
