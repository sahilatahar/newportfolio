import Experience from "./Experience";
import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import React, { useEffect } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
