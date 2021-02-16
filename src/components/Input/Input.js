import React from "react";
import "./Input.css";
import hoc from "../../HOC/HOC";

const Input = (props) => {
  return (
    <React.Fragment>
      <form className="Input-form" onSubmit={props.addTask}>
        <label htmlFor="title">Task</label>
        <br />
        <input type="text" id="title" name="title" />
        <br />
        <label htmlFor="status">Status</label>
        <br />

        <select id="status" name="status">
          {props.statuses.map((status, index) => {
            return (
              <option value={status} key={index}>
                {status}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="user">User</label>
        <br />
        <input type="text" id="user" name="user" />
        <br />
        <input type="submit" value="Add Task" />
      </form>
      <hr />
    </React.Fragment>
  );
};

export default React.memo(hoc(Input));
