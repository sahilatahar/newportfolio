import React from "react";
import "./App.css";
import HorizontalBar from "./components/HorizontalBar";
import aboutImage from "./images/about_image.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <HorizontalBar title="About me" width="25vw" />
        <div className="row ">
          <div className="col">
            <img src={aboutImage} alt="web development image" />
          </div>
          <div className="col">
            <p>
              Hello, my name is{" "}
              <strong className="text-color">Sahil Atahar</strong>, and I am a
              student of BCA studying web development. I have always been
              fascinated by the power of technology and the way it can be used
              to build websites and applications that make a real impact. I am
              particularly interested in front-end development. I have completed
              several small projects for practice, including{" "}
              <a
                href="https://sahilatahar.github.io/Responsive-Website/"
                target="_blank"
              >
                <strong className="text-color">Responsive Website</strong>
              </a>{" "}
              and{" "}
              <a
                href="https://sahilatahar.github.io/portfolio"
                target="_blank"
              >
                <strong className="text-color">Another Portfolio</strong>
              </a>
              . I am excited to continue learning and growing as a web
              developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
