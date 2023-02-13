import React from "react";
import HorizontalBar from "./components/HorizontalBar";
import Button from "./components/Button";
import webDevImage from "./images/web_development.jpg";
import appDevImage from "./images/app_development.jpeg";
import proLangImage from "./images/p_language.jpg";

const Experience = () => {
  return (
    <>
      <div id="experience"></div>
      <HorizontalBar title="Skills & Experience" width="40vw" />
      <div className="skills">
        <div className="row">
          <div className="col">
            <img src={webDevImage} alt="Web Development Image" />
            <h1>Web Development</h1>
            <p>
              As a web developer, I have extensive experience in HTML, CSS,
              JavaScript and the React framework. My expertise in these
              technologies has allowed me to create dynamic and interactive
              websites that provide a seamless user experience. I particularly
              enjoy using React as it provides a flexible and efficient way to
              build user interfaces.
            </p>
            <Button
              text="Checkout Projects"
              url="https://github.com/Sahil-Atahar?tab=repositories&q=&type=&language=javascript&sort="
            />
          </div>

          <div className="col">
            <img src={appDevImage} alt="App Development Image" />
            <h1>App Development</h1>
            <p>
              As a Flutter developer, I have extensive experience in developing
              robust and visually appealing mobile applications. My expertise in
              the framework, combined with my passion for creating cutting-edge
              apps, has enabled me to deliver high-quality projects. Using
              Flutter, I have created many projects. My Futter experience was
              awesome.
            </p>
            <Button
              text="Checkout Projects"
              url="https://github.com/Sahil-Atahar?tab=repositories&q=&type=&language=dart&sort="
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={proLangImage} alt="Programming language Image" />
          </div>
          <div className="col">
            <h1>Programming Language</h1>
            <p>
              I have a basic foundation in both C and C++ programming languages.
              I write multiple console based projects with these languages.
            </p>
            <Button
              text="Checkout Projects"
              url="https://github.com/Sahil-Atahar?tab=repositories"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
