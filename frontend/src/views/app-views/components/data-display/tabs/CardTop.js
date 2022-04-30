import React, { Component } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export class CardTop extends Component {
  render() {
    return (
      <div style={{background: "#F5F5F5", padding: "24px"}}>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Tab Title 1" key="1">
              <p>Content of Tab Pane 1</p>
              <p>Content of Tab Pane 1</p>
              <p>Content of Tab Pane 1</p>
            </TabPane>
            <TabPane tab="Tab Title 2" key="2">
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </TabPane>
            <TabPane tab="Tab Title 3" key="3">
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default CardTop;
