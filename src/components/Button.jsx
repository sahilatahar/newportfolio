import React from "react";
import "./button.css";

const Button = (props) => {
  return <button onClick={() => window.open(props.url)}>{props.text}</button>;
};

export default Button;
