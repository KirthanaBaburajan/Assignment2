import React, { Component } from "react";
import Todo from "./Todo";
import Input from "../Input/Input";
import "./Todos.css";
import statusContext from "../../context/StatusContext/status-context";
import Status from "../Status/Status";

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Check goods",
        user: "Max",
        status: "Completed",
      },
      {
        id: 2,
        title: "Check sales list",
        user: "Max",
        status: "Pending",
      },
    ],
    status: ["Pending", "Processing", "Completed", "Failed"],
    isError: false,
    statusChange: 0,
    time: new Date(),
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  };

  changeStatusHandler = (todo, event) => {
    let newIndex = this.state.todos.findIndex(
      (oldTodo) => oldTodo.id === todo.id
    );
    let newTodo = this.state.todos.find(
      (oldTodo, index) => oldTodo.id === todo.id
    );

    let statuses = [...this.state.status];
    let statusIndex = statuses.indexOf(newTodo.status);

    if (statusIndex === 3) {
      statusIndex = 0;
    } else {
      statusIndex += 1;
    }
    let newStatus = statuses[statusIndex];
    newTodo.status = newStatus;

    let oldTodos = [...this.state.todos];
    oldTodos.splice(newIndex, 1, newTodo);
    this.setState({
      todos: oldTodos,
      statusChange: this.state.statusChange + 1,
    });
  };

  addTaskHandler = (event) => {
    const todos = this.state.todos;
    const title = event.target.title.value;
    const user = event.target.user.value;
    const status = event.target.status.value;
    const id = todos.length + 1;
    if (user.length <= 0 || title.length <= 0) {
      alert("Please enter the value");
      return;
    }

    let newTodos = [...todos];
    newTodos.splice(id, 0, { id, title, user, status });

    this.setState({
      todos: newTodos,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="App-section-container">
        <div>
          <statusContext.Provider
            value={{
              statusChange: this.state.statusChange,
              changeStatusMethod: this.changeStatusHandler,
            }}
          >
            <Todo
              todos={this.state.todos}
              changeStatus={this.changeStatusHandler}
            />
          </statusContext.Provider>
        </div>
        <div> {this.state.time.toLocaleTimeString()}</div>
        <div>
          <Status
            render={(status) => (
              <Input statuses={status} addTask={this.addTaskHandler} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default Todos;

// Todo:
// 1. Fragment
// 2. memo
// 3. ref
// 4. context
// 5. Hoc
// 6. Render Props
// 7. Error Boundary
