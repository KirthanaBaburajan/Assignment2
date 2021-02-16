import React, { Component } from "react";
import "./Output.css";
import statusContext from "../../context/StatusContext/status-context";

class Output extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  static contextType = statusContext;

  state = {
    status: null,
  };

  showHandler = () => {
    const displayValue = this.elementRef.current.style.display;
    let show_data = "block";

    if (displayValue === show_data) {
      show_data = "none";
    }
    this.elementRef.current.style.display = show_data;
  };

  render() {
    const statusChange = (
      <statusContext.Consumer>
        {(context) => {
          return context.statusChange;
        }}
      </statusContext.Consumer>
    );
    return (
      <div>
        <h3 onClick={this.showHandler}>{this.props.todo.title}</h3>
        <div className="Todo-status" ref={this.elementRef}>
          {/* <p onClick={this.props.changeStatus.bind(this, this.props.todo)}>
            {this.props.todo.status}
          </p> */}
          <p
            onClick={this.context.changeStatusMethod.bind(
              this,
              this.props.todo
            )}
          >
            {this.props.todo.status}
          </p>

          <p>Written by: {this.props.todo.user}</p>
          <p>{this.state.status}</p>
          <p>No. of times status changed: {statusChange}</p>
        </div>
        <hr />
      </div>
    );
  }
}

export default Output;
