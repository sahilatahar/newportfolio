import React from "react";
import Card from "./components/Card";
import HorizontalBar from "./components/HorizontalBar";
import "./App.css";
import { AiFillHtml5 } from "react-icons/ai";
import { RiFlutterFill } from "react-icons/ri";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiDart,
} from "react-icons/di";
import todoAppImage from "./images/todo_app.png";
import calAppImage from "./images/calculator_app.png";
import prePortfolioImage from "./images/pre_portfolio.png";
import responsiveWebImage from "./images/responsive_website.png";
import quizzerImage from "./images/quizzer.png";
import webProjectsImage from "./images/web_projects.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Todo - The Task Keeper",
      desc: "An Todo & Notes App created using Flutter, SQL. It has multiple features. You can try it.",
      btnText: "Download App",
      imgSrc: todoAppImage,
      btnUrl: "https://github.com/Sahil-Atahar/Todo-The-Task-Keeper",
      usedSkills: [
        <div className="icons">
          <RiFlutterFill className="icon" />
          <p>Flutter</p>
        </div>,
        <div className="icons">
          <DiDart className="icon" />
          <p>Dart</p>
        </div>,
      ],
    },
    {
      title: "Calculator",
      desc: "An Simple Calculator with new UI.",
      btnText: "Download App",
      imgSrc: calAppImage,
      btnUrl:
        "https://drive.google.com/file/d/1zgHMhv7SsXpC8-4_krUAJoiShpfRjGr2/view?usp=share_link",
      usedSkills: [
        <div className="icons">
          <RiFlutterFill className="icon" />
          <p>Flutter</p>
        </div>,
        <div className="icons">
          <DiDart className="icon" />
          <p>Dart</p>
        </div>,
      ],
    },

    {
      title: "Portfolio Template",
      desc: "A Simple Portfolio created using React, Bootstrap 5.",
      btnText: "Live Demo",
      imgSrc: prePortfolioImage,
      btnUrl: "https://sahil-atahar.github.io/portfolio",
      usedSkills: [
        <div className="icons">
          <AiFillHtml5 className="icon" />
          <p>HTML</p>
        </div>,
        <div className="icons">
          <DiCss3 className="icon" />
          <p>CSS</p>
        </div>,
        <div className="icons">
          <DiJavascript1 className="icon" />
          <p>JavaScript</p>
        </div>,
        <div className="icons">
          <DiReact className="icon" />
          <p>React</p>
        </div>,
        <div className="icons">
          <DiBootstrap className="icon" />
          <p>Bootstrap</p>
        </div>,
      ],
    },
    {
      title: "Simple Fully Responsive Website",
      desc: "A Simple responsive website using pure HTML and Bootstrap 5.",
      btnText: "Live Demo",
      imgSrc: responsiveWebImage,
      btnUrl: "https://sahil-atahar.github.io/Responsive-Website/",
      usedSkills: [
        <div className="icons">
          <AiFillHtml5 className="icon" />
          <p>HTML</p>
        </div>,
        <div className="icons">
          <DiCss3 className="icon" />
          <p>CSS</p>
        </div>,
        <div className="icons">
          <DiBootstrap className="icon" />
          <p>Bootstrap</p>
        </div>,
      ],
    },
    {
      title: "Quizzer with Admin Panel",
      desc: "A Quiz website using pure HTML, CSS, JavaScript with Admin Panel.",
      btnText: "Visit GitHub",
      imgSrc: quizzerImage,
      btnUrl: "https://sahil-atahar.github.io/Responsive-Website/",
      usedSkills: [
        <div className="icons">
          <AiFillHtml5 className="icon" />
          <p>HTML</p>
        </div>,
        <div className="icons">
          <DiCss3 className="icon" />
          <p>CSS</p>
        </div>,
        <div className="icons">
          <DiJavascript1 className="icon" />
          <p>JavaScript</p>
        </div>,
      ],
    },
    {
      title: "50+ HTML CSS JavaScript Projects",
      desc: "15+ projects using pure HTML, CSS, Vannila JavaScript.",
      btnText: "Visit GitHub",
      imgSrc: webProjectsImage,
      btnUrl: "https://github.com/Sahil-Atahar/HTML-CSS-JavaScript/",
      usedSkills: [
        <div className="icons">
          <AiFillHtml5 className="icon" />
          <p>HTML</p>
        </div>,
        <div className="icons">
          <DiCss3 className="icon" />
          <p>CSS</p>
        </div>,
        <div className="icons">
          <DiJavascript1 className="icon" />
          <p>JavaScript</p>
        </div>,
      ],
    },
  ];

  return (
    <div className="projects" id="projects">
      <HorizontalBar title="Projects" bgColor="#fb7430" />
      {projects.map((project) => (
        <Card
          title={project.title}
          desc={project.desc}
          btnText={project.btnText}
          imgSrc={project.imgSrc}
          btnUrl={project.btnUrl}
          key={projects.indexOf(project)}
          usedSkills={project.usedSkills}
        />
      ))}
    </div>
  );
};

export default Projects;
