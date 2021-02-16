import React, { Component } from "react";

class Status extends Component {
  state = {
    status: ["Pending", "Processing", "Completed", "Failed"],
  };

  render() {
    return <div>{this.props.render(this.state.status)}</div>;
  }
}

export default Status;
