import React, { Component } from "react";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export class Card extends Component {
  render() {
    return (
      <div className="border rounded" style={{ width: 320 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    );
  }
}

export default Card;
