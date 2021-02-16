import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    isError: false,
    errorMessage: "",
  };

  componentDidCatch = (error, message) => {
    this.setState({ isError: true, errorMessage: error });
  };

  render() {
    if (this.state.isError) {
      return <div style={{ padding: "50px" }}>Something went wrong!</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
