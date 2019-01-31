import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container">
  <div className="row ml-5">
  {props.children}
  </div>
  </div>
}

export default Wrapper;
