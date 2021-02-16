import React from "react";
import Output from "../Output/Output";

const Todo = (props) => {
  return (
    <div className="Todos-container">
      {props.todos.map((todo, index) => {
        return (
          <Output todo={todo} changeStatus={props.changeStatus} key={index} />
        );
      })}
    </div>
  );
};

export default React.memo(Todo);
