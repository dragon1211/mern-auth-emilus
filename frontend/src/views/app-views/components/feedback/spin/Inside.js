import React, { Component } from "react";
import { Spin } from "antd";

const style = {
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px',
    marginBottom: '20px',
    padding: '30px 50px',
    margin: '20px 0'
}

export class Inside extends Component {
  render() {
    return (
      <div style={style}>
        <Spin />
      </div>
    );
  }
}

export default Inside;
