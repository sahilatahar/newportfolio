import React from "react";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import navImage from "../images/header_image.jpg";

const Navbar = () => {
  const [isVisible, setVisibility] = useState(false);

  function toggleNavbar() {
    document.getElementById("navList").style.height = isVisible
      ? "300px"
      : "0px";
    setVisibility(!isVisible);
  }

  function scrollTo(index) {
    document.getElementById("navList").style.height = "0px";
    setVisibility(false);

    switch (index) {
      case 0:
        document.getElementById("header").scrollIntoView();
        break;
      case 1:
        document.getElementById("header").scrollIntoView();
        break;
      case 2:
        document.getElementById("about").scrollIntoView();
        break;
      case 3:
        document.getElementById("experience").scrollIntoView();
        break;
      case 4:
        document.getElementById("projects").scrollIntoView();
        break;
      case 5:
        document.getElementById("footer").scrollIntoView();
        break;
    }
  }

  return (
    <nav>
      <h1 onClick={() => scrollTo(0)}>
        <img src={navImage} className="round-image" />
        Portfolio
      </h1>
      <ul id="navList">
        <li onClick={() => scrollTo(1)}>Home</li>
        <li onClick={() => scrollTo(2)}>About</li>
        <li onClick={() => scrollTo(3)}>Experience</li>
        <li onClick={() => scrollTo(4)}>Projects</li>
        <li onClick={() => scrollTo(5)}>Contact</li>
      </ul>
      <RxHamburgerMenu id="hamburgeIcon" onClick={toggleNavbar} />
    </nav>
  );
};

export default Navbar;
