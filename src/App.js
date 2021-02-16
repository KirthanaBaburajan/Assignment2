import React, { Component } from "react";
import Todos from "./components/Todos/Todos";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import "./App.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">TASKS</header>
        <ErrorBoundary>
          <Todos />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
