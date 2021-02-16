import React from "react";
import "./HOC.css";

const HOC = (Component) => {
  return (props) => (
    <div className="Hoc-content">
      <Component {...props} />
    </div>
  );
};

export default HOC;
