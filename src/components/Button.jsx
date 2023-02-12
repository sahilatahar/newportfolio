import React from "react";
import "./button.css";

const Button = (props) => {

  return (
    <button>
      <a href={props.url} target='_blank'>{props.text}</a>
    </button>
  );
};

export default Button;
