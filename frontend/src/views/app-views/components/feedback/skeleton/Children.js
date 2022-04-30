import React, { Component } from "react";
import { Skeleton, Button } from "antd";

export class Children extends Component {
  state = {
    loading: false
  };

  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    return (
      <div className="article">
        <Skeleton loading={this.state.loading}>
          <div>
            <h4 style={{ marginBottom: "16px" }}>
              Ant Design, a design language
            </h4>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          </div>
        </Skeleton>
        <Button
          style={{ marginTop: "16px" }}
          onClick={this.showSkeleton}
          disabled={this.state.loading}
        >
          Show Skeleton
        </Button>
      </div>
    );
  }
}

export default Children;
