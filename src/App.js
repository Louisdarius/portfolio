import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Top from "./components/Top";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <React.Fragment>
      {/* <div className="App"> */}
      <Nav />
      <session id="top">
        <Top />
      </session>
      <session id="aboutMe">
        <AboutMe />
      </session>
      <session id="resume">
        <Resume />
      </session>
      <session id="projects">
        <Projects />
      </session>
      <session id="skills">
        <Skills />
      </session>
      <session id="contacts">
        <Contacts />
      </session>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
