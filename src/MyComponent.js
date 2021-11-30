import React from "react";
import "./MyComponent.css";

function MyComponent(props) {
  return (
    <div id="challenge-node">
      <h1>My First React Component!</h1>
      <p>Welcome to {props.country} </p>
    </div>
  );
}
export default MyComponent;
