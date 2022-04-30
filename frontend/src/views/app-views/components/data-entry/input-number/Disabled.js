import React, { Component } from "react";
import { InputNumber, Button } from "antd";

export class Disabled extends Component {
  state = {
    disabled: true
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

  render() {
    return (
      <div>
        <InputNumber
          min={1}
          max={10}
          disabled={this.state.disabled}
          defaultValue={3}
        />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle disabled
          </Button>
        </div>
      </div>
    );
  }
}

export default Disabled;
