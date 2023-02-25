import React from "react";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import navImage from "../images/nav_image.jpg";

const Navbar = () => {
  const [isVisible, setVisibility] = useState(false);

  function toggleNavbar() {
    document.getElementById("navList").style.height = isVisible
      ? "0px"
      : "300px";
    setVisibility(!isVisible);
  }

  function scrollTo(id) {
    toggleNavbar();
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function changeBgColor() {
    var r = document.querySelector(":root");
    var rs = getComputedStyle(r);
    if (rs.getPropertyValue("--bg-color") === "#fb7430") {
      r.style.setProperty("--bg-color", "#34bf49");
    } else {
      r.style.setProperty("--bg-color", "#fb7430");
    }
    toggleNavbar();
  }

  return (
    <nav>
      <h1 onClick={() => scrollTo("header")}>
        <img src={navImage} className="round-image" />
        Portfolio
      </h1>
      <ul id="navList">
        <li onClick={() => scrollTo("header")}>Home</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("experience")}>Experience</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("footer")}>Contact</li>
        <li onClick={changeBgColor}>Theme</li>
      </ul>
      <RxHamburgerMenu id="hamburgeIcon" onClick={toggleNavbar} />
    </nav>
  );
};

export default Navbar;
