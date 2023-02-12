import React from "react";
import "./App.css";
import headerImage from "./images/header_image.jpg";

const Header = () => {
  return (
    <>
      <div className="header" id="header"></div>
      <div className="row">
        <div className="col">
          <img
            src={headerImage}
            alt="image"
            id="image"
            className="round-image"
          />
        </div>
        <div className="col">
          <h1>Hello , I am Sahil Atahar</h1>
          <p>BCA 2nd Year Student</p>
        </div>
      </div>
    </>
  );
};

export default Header;
