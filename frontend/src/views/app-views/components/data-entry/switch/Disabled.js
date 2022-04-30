import React, { Component } from "react";
import { Switch, Button } from "antd";

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
        <Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <br />
        <Button type="primary" onClick={this.toggle}>
          Toggle disabled
        </Button>
      </div>
    );
  }
}

export default Disabled;
