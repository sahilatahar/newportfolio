import React from "react";
import "./App.css";
import HorizontalBar from "./components/HorizontalBar";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  const links = [
    "https://github.com/sahil-atahar/",
    "https://linked.in/sahil-atahar-100366245/",
    "https://instagram.com/sahilatahar",
    "https://twitter.com/sahil_atahar",
  ];

  function openLink(index) {
    window.open(links[index], "_blank");
  }

  return (
    <>
      <HorizontalBar title="Contact" />
      <div className="footer" id="footer">
        <div className="row">
          <div className="col">
            <div className="icons">
              <div className="icon" onClick={() => openLink(0)}>
                <BsGithub />
                <p>GitHub</p>
              </div>
              <div className="icon" onClick={() => openLink(1)}>
                <BsLinkedin />
                <p>Linkedin</p>
              </div>
              <div className="icon" onClick={() => openLink(2)}>
                <BsInstagram />
                <p>Instagram</p>
              </div>
              <div className="icon" onClick={() => openLink(3)}>
                <BsTwitter />
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2023 Sahil Atahar. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
}
