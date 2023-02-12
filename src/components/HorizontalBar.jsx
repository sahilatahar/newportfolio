import React from "react";

const HorizontalBar = (props) => {
  const hrStyle = {
    width:
      window.innerWidth < 800
        ? "70vw"
        : props.width != undefined
        ? props.width
        : "25vw",
    height: "4px",
    marginBottom: "60px",
    color: "white",
    backgroundColor: "white",
    marginTop: "10px",
  };

  const hStyle = {
    fontSize: window.innerWidth < 800 ? "28px" : "48px",
  };

  const barStyle = {
    backgroundColor: props.bgColor != undefined ? props.bgColor : "#211f1f",
  };
  return (
    <div className="horizontalbar" style={barStyle}>
      <h1 style={hStyle}>
        {props.title}
        <hr style={hrStyle} />
      </h1>
    </div>
  );
};

export default HorizontalBar;
